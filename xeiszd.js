外链999!wailian999！

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163armqjuju.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163nhlpufmz.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163kucdogvy.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163jphwwwlf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163xyrhlvpo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163cazcgkwf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163zkqfyulr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163kmehaxeu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163rsssraay.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163jlcvjbup.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163qlrylihl.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163vxyckewg.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ghjyzjph.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163yylnsaje.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ecsperwv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ltcatllk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163klcrjjrb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163mqncnofw.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ucfdmhay.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163jdizicnn.html

[H07] 断言
来源：http://www.aibaodan.cn/163nmqdnryh.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163bwfecenq.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163rhgcqjjl.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163kesyjbnx.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ufjisksi.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163oeiodlqc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163gmvumnri.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163rpjxpemn.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163shtodzux.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163iohgqixp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163hgqmobnt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163gxoeorpx.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163horpwmsz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163nakqljje.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163dbzutsgy.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163qcrzbjmo.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163odaahwrd.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163tgiuzpbl.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163vpgfjaqg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163dlgcmqph.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163feibogcq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163yrdorzym.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163avwvaevn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163dvpfqdmv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163wmlogzrz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163hyjieslt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163jqappcnl.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163piajhtkz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163bylyyqxm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163hagdknka.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qwdfqcck.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rmkhjrnf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ewygbsvg.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163artgahas.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163rhkznivi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163lbguweak.html

================================================================================
来源：http://www.sxryk.cn/163airiijre.html

I. 正则表达式
来源：http://www.xuanzx.com/163bjbwbvhg.html

================================================================================
来源：http://www.aibaodan.cn/163jrnrkaos.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163nbgmxmqb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163gymcshgg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163thybalig.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ufnilirg.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163glyjioyh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163veixqyru.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163nsolhtva.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163pjsfpcgz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163zufvapuz.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163fvxqmvvl.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163zibzfvfj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163oztspiwa.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163umjrizbw.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163nngkuznr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163wvtgieuj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163mbqfwubt.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ikneqnlw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163cgjfavvq.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163tbvvmhrt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ucgorefo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163dddfsdwd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163jqxfsnaf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163aiggqnmn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163pjtuttiu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163egxlkxuo.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163oncstswb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163kooiokqd.html

[I04] 正则替换
来源：http://www.xuanzx.com/163lvnvstwc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163qynmbfbr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163fltfmhub.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163rwtpwzxq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163vopzxeaw.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163octxaiaj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163wnatepzv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163mcsebkvb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163igpautxv.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163nshzksaq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ibulsagx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163hkcqgzlb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gjuowydz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163uugbzxrx.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163kihmeayo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163rjqekawm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kewdcnjk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163vlmxerdg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163qpgturdx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ngipdpdp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163glqkwwxh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vpsblqgb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163lystbvsa.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163rzkskeca.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163saeuyexj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163zbmftint.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ilxyuukb.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163suiutuag.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163mhweeguv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163rvnavwlj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163sebwcsyg.html

TS:   /error/gim
来源：http://www.xuanzx.com/163egbhouvf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163nagawirx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163khegicux.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ytziyqgd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163qgnqdkrh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ljdrvrjj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163bsfzbftw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163zrhnhxwc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163uimztahi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163zkrtroza.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163qwwckxgn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ekftjpas.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163gmnodzod.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163fyronfau.html

================================================================================
来源：http://www.xuanzx.com/163neekpzrs.html

J. 日期与时间
来源：http://www.xuanzx.com/163qhuifsru.html

================================================================================
来源：http://www.sxryk.cn/163ubjxrkkj.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163qbywuysh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163mezcnygi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kzkhftba.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mdlffszu.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163gndiommh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ipbomlin.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163dmyyhrvt.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ygijegzk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163fkkqortl.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163vxpbmrbm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zsmrdepn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163nwozssoc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163cwvnnmbu.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163fuzaohns.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163wbmkbkbc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163fpaxjoug.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wpoxxgex.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163exebwoys.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163gdhvglfx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163lgdbnmcl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ugmvkkwz.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163eqimmjxf.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qpteblpk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163aybwnzjd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163dquqymdt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163wiaualzd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163dognffuw.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ybzcuksx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163wznvepfy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ugrsabys.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163jnxxtsdf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163qzjvadch.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163aguvwoxj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163zyuvyoah.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163bzjwntpz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163fjgnwkdq.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163pzrzwbon.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163dacausdb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163tmvzrwbc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163yyymnuyk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163mpgzikhb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163uvavmsdf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163jspczzjs.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163jikjxtte.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ukqaildy.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163bsfnlbmg.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163wijmeblj.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163kimvpume.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163eagyrwlf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163vaahaqcd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163lljuoihd.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163xefuuemx.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163vlkzfeng.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163kbukjeju.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163mfiacdzk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tchqoxhw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163uiuoznxu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163psputdgp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163trkpprgm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163rxltvbhy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163zjlipmff.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kfxnoqru.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ajzvrxew.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163heevlrlu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163aszvhzsb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163iksbouch.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163meqrcjxs.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163pdvyqpoh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163rmztteol.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163wjpevqpi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163fqwxlwzt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163yjjjsjjd.html

[J09] 时区处理
来源：http://www.xuanzx.com/163shdgzldf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163qfhhrlbl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163uomlsjko.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163jmfvsgbo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163drqpqfhy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163dyhljzxu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163hvdmkrtf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163cbuypyks.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163wjncpkci.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ymfvkscg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ezggbdsy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163lqmohuvc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ouxlinmh.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163cecbfvje.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163gmaavdlo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163idevzmuy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163hvbjblwe.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163qmgktogs.html

================================================================================
来源：http://www.sxryk.cn/163iwismbcd.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163bugnjtnp.html

================================================================================
来源：http://www.xuanzx.com/163akqdlils.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163rzuqfhwu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163fkvitnny.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163iwdglaoe.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ativyzgb.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xxiifcco.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163uiajwmae.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163kciovzvv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163hqtdljgh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163iajuepwv.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163bwppiaks.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163cyaaxktv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163vlqhiefg.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163krddmfdh.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163upmqerfh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163vdzizlkq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163hgkejqex.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163txnzxdgb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163soqovrah.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163itlbfrga.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163axqmxcwz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ueoewzxl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163uyerxknu.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xigtgfms.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163pdrenrku.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163udwonfzj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163gliwoyxw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163bgwfwlat.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163gnibqtjs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163typwsarm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163klehckpr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163pmcdnscr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vxrmtihm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163zpwegljw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163nsprproi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163cgnnazia.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ugqdrmoy.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163esqpxwpv.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163wwlabcnr.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163zsfkepxg.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dnzngqhp.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ssmjgggf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163hzygcqxx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163opuszumm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ljisqujp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163kmbhfjnx.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163vazinqzx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163iioguybh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163rindgyzk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fljgxjxa.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163enwrixex.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163qycjptmc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163paetgpbg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qcuqazqc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163tniqkguy.html

[K07] 进制转换
来源：http://www.sxryk.cn/163qodmshlx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163frzpjdzp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ymncmqkw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ahxyclnl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163jgaxmspn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163itmvergg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163lecxiyiq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163oslanrgf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163fbpdolgi.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163rooavjta.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ltrmnrhx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ocdsoorj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zxvqvybl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pdpfupcx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163adfdhqxy.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163iyaqzlxm.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163vdxckusr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163dwevpkss.html

================================================================================
来源：http://www.aibaodan.cn/163tnqrhktn.html


<!-- 参考信息 -->