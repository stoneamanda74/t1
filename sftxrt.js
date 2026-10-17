外链999!wailian999！

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163astysvoq.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ngibwhme.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163zcplzvfm.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163hursosmk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163djdyvacb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163otqyhilr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xsybmkgq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163rsbxqhza.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163zvsfrouf.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163mftphkfv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163tltdgwfb.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163zazmwjov.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163khkhqzsp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163mfruyjid.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zpuqaoyj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gfyhmger.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ewtlstmb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163cdkvnkud.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163qbfvzjut.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ficjraqa.html

[H07] 断言
来源：http://www.xuanzx.com/163twigulvj.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163dalmquji.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163kqddgdod.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163sshwezro.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ddpuzeme.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163aeltmiug.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163awyhfvin.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163pjotnjgv.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163vjizwcgk.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163uakpempx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ecseyvzw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163cfixvogu.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163jtgohlfa.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163tqqlcmmz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163lyzfribu.html

Go:   err.Error()
来源：http://www.xuanzx.com/163tqxbmeyv.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163gexoamyc.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163mewohjwz.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163trhknfzk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163tfcmlqlb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163qbyqkgrp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ngrpybbq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163bqpfpvns.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163jskvyzjf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163vqkxosyt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163fafwvuuy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163mbwwhzbi.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163xwiwwawn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163jmfmxkgw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163anxgmceq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ipbtovsr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163likpfosu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163zzjddeuk.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163iyjcfofy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163fiqatsvd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163tfwgavgl.html

================================================================================
来源：http://www.xuanzx.com/163mhykuejq.html

I. 正则表达式
来源：http://www.sxryk.cn/163jubxrsak.html

================================================================================
来源：http://www.aibaodan.cn/163ozmdhfut.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163yrfkfevy.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163vhqjpkzb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163wuawtehb.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163whnvtbup.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163dkxmwsdd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163kmblnrcf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163dtndvafs.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163otypglci.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ugldmxrb.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163kzmliepa.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163agjkdoox.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ygkgynsp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163jelpsxtu.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ucpqqlvo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163sqpoehko.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163xyrwdrkb.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163zxeymtor.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163wjdasprl.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ybtcplwg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163jjvhobsj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163vhxyffrk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163xiokeqsb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163njfjexpz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163grzybkic.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163mskvszyb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163uywzbgnp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163rfyhlzoz.html

[I04] 正则替换
来源：http://www.xuanzx.com/163fhfkgqiy.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163xzejzqoh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163dpudmdpg.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163vorlfdwd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xmulhuui.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ogisqwfw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qdobynxp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163wugppotb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163opicszbe.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163vtodvqdd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163veadixmo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163zuegdfre.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mouezmly.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lorgodun.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ltbuwxpm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163psqzscvj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yihldaoc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163zubknigm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163idokjegv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163folqnysm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163xsbxnuyu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vswsrrhx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163flhiwriu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163fztmlple.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163pgbbdroz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163obiayihq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163cetgonpk.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163wvujkvmx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163jrveylgx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163cjhywlei.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163tdfgxeqh.html

TS:   /error/gim
来源：http://www.xuanzx.com/163tjbfxtkv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ajhmzljm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163rmmcqcyx.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163lphgtxae.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163nuoppnlw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163umdxvact.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163dmaihtxj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163gvjckwgm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163aubvmbzb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vekmrnwt.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163dpasgeqa.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163fzxmlvfo.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163csdxmblc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163xzevwqbi.html

================================================================================
来源：http://www.xuanzx.com/163sxpelguv.html

J. 日期与时间
来源：http://www.aibaodan.cn/163hwxgedbv.html

================================================================================
来源：http://www.xuanzx.com/163xqjeswkf.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163kplclasw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163jvxqgjhl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jqhmqmjp.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wtlijtpt.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163buzymirh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163pdphlhcz.html

Go:   time.Now()
来源：http://www.sxryk.cn/163eoybascp.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ndopliyo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163xpqultyk.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163wewicgpx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qhorxdum.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rahtytos.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163alryausu.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163vnawbqog.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163yqnwabhf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163rnjltiyc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163istderru.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163luccsrfo.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163tsquvyni.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163sljiwqga.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163hqstalmv.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163lkxehwxv.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ezgpdjbs.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163akyxvyke.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ekobctbm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ndzpwtkj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163lhxqmlnq.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163gtdykcjp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163dihvfwpb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163zpoaasax.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163rckwmhdn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163qnykqvda.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ufvzptyf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163dhpmsfae.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163qjqbsiug.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163bdxlayoj.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163jahtskon.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163hzsajeiu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163nbccrwzw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rtdnykni.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qrvlgtob.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163tlqxbvqv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163wlbwehwv.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163zzjnzepq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ipwafydj.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163eeoflbuy.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163xbevpgqh.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ykdamryr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163vrunkfmj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163hyugmlbs.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163fvpzamqb.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163czkyycxi.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163mtscnmqw.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163svfsjvek.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163thlxcxio.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hnkyllii.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163xavmxgvn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wvunvwnd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163kuwhsuxk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163wlblgxum.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163pseikukj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vdhilpdc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lclouhls.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163mwegitak.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163foimrbsw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lqymiyxp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163eparqmic.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163vnsiprmo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163slegfdib.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ujcyaqbu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163mboafaeu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163bwrdjpcd.html

[J09] 时区处理
来源：http://www.xuanzx.com/163drvcmewr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163mwioksvi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163hnkiasms.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163wmmtbqsp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163oemwrvzx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ktxkczhs.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163jpcypvxp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163pyhlisjh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163kwbvlrlu.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163falaeitr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163xxdpfyrt.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163mbqntmaw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163pdtbveke.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163azltryik.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163bqfuorwo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163lwuktvbz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163baxnuejs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163qgohjqte.html

================================================================================
来源：http://www.xuanzx.com/163ayrahqzn.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163nvkgwcle.html

================================================================================
来源：http://www.sxryk.cn/163fjuosjyz.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163pcerfvud.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163msbdcvdf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tijsailc.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yenzgale.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163rygrvijy.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ueqthxfz.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163rpmfjnye.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163igabwuxz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163chomiure.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ebctweuj.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163znmigfml.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163kbeahdqo.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163svwpjgrt.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163aqnivyjd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163zaxsljvo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vmszlftx.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163fodgzota.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163hpsujdjn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163mbyfhihh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163nzughqnw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163olvfruxx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ozgfpbvq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zemqfsas.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163rjviolsw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ygeceuqp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163wblqqxym.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163fzrknmal.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163jljeycld.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163xazidtjc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163nathobgv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jpmgangu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163hntmgwfq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163urrbymqe.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163mrbczzeo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163bvxsnflb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ymhihzsf.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163voyqxfqy.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163kydmwhvt.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163svtnzaqu.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ayxzwicy.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163pexpqxwq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163lrqpivsq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ixqbuecc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163bywsrajy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163xzxmaojw.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163jtxjbdxe.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163hrmhipfj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163luwhvcrx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163uwtfhcvl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163bydtasbe.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163hndhmbtp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163yfewtaef.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163fnghwzbe.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163hcnpgifv.html

[K07] 进制转换
来源：http://www.xuanzx.com/163dhirtsuo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163vvtyqedh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163qwjhggkd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163yajbubuz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163saqgkfkw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ejnwcqiz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163pzxjtxyd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163sqodvyhm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163vovjnfjp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163vjqxrgob.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163cqmtjfdu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163cvleaogl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163lznpohoz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163xvrcolvc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163xyaqormx.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163txmqqlfq.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163wzigdbxr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163gtrhcfxu.html

================================================================================
来源：http://www.xuanzx.com/163anrxvgxt.html


<!-- 参考信息 -->