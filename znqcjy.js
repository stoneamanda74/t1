外链999!wailian999！

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163rrsxdwng.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jzqztaab.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rwktmujy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163iznekjco.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163hbzegcqj.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163xyewibgl.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163hsfklaft.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163irukpvki.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ovnwpkgo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163kyyiytxy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ksfqejyb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163gbplrbxp.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163kmlaiebq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ljqwqibg.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163jywuimoi.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163acqfhapp.html

[H07] 断言
来源：http://www.aibaodan.cn/163xcdobtfm.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ykdrapnp.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163roevfepe.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163slafbarc.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163uabbajju.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163hedqkpwn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163wmmsdekq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163geipwoia.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163nkzhfsto.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163hokgjebz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163kttweaif.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163qlwnaauh.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163uxwmpley.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163fojnxfmn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163slcsnkgf.html

Go:   err.Error()
来源：http://www.sxryk.cn/163mybomtmy.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ziefyhuj.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163gnuophst.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163vctbnanq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163xfisxxyw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163asfpwsvj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163gqnumttr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ruaartqn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163sxgczvjx.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163lvpczvmr.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163jbgijexq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163rtvhjfkr.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163xpigitvx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163bbquuyln.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163cavwzzhh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163cjhwzsbz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jrstpxak.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163taozrpfs.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163afpbdxaa.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163xtkfwafa.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163qmpyjszk.html

================================================================================
来源：http://www.aibaodan.cn/163momfduzc.html

I. 正则表达式
来源：http://www.xuanzx.com/163sfbeywcn.html

================================================================================
来源：http://www.aibaodan.cn/163rwjcvvyh.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163cstvegiv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ohgodhml.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ngxylrml.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163uiaciunq.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ldfncxub.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163rwcozuha.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163yofnbehz.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163bptmzeut.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163qsotrmfi.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ivqszjzc.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163jheyfbek.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163obipioip.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163onufhrih.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163rcyyhqcr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163thkfzpge.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163bbdhodag.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163pifsdpra.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163jtbztubq.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163eridixei.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163kyzvnrpl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163rdxgchzf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163uvgqnbcc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163gwpgfpwr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163gyqctuog.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163vaocvvzg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163tneefrsg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ytxgsvrq.html

[I04] 正则替换
来源：http://www.xuanzx.com/163enijewhy.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ffwzapvv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ipmuppri.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163erwdumtr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163tsrwymne.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163kuevgzmy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163kicdiwet.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163xwhoinsd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163udxogqrg.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163zwcitglp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163wrrnldxm.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163hvwisqso.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163entbtjom.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jxjfrnry.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163egefgqoh.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163isiyvcrp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cduhklbr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163llnesgcz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ghgpvppu.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tdsekdua.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163mzysxldx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163dyffjvrx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163cptdzgrp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ntokjawy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163pigysyrp.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163irlefqsc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tfrdmivk.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163vmspxpzg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163zjonldop.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163qwyoxsrm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163wvwteurg.html

TS:   /error/gim
来源：http://www.xuanzx.com/163gplgsmjp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163magrcfhp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163giuxjiyo.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163kkghkluf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ekcvawro.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163shxdhbdw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163guinhwhs.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163rfxgmwfj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163lgxyhbxh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163tutofzvn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163hdxjxtgn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163pvgwgivz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163avyptuzp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163jgiynqmq.html

================================================================================
来源：http://www.xuanzx.com/163sznkunsi.html

J. 日期与时间
来源：http://www.sxryk.cn/163hjlcqydz.html

================================================================================
来源：http://www.xuanzx.com/163thpducpe.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ztfaybck.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163duwmnrrw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hjphnqrf.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163fxvuwusk.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163zqrflags.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163jlruaslh.html

Go:   time.Now()
来源：http://www.sxryk.cn/163hriizdwc.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163sskozgjk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163udozaqla.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163rvyusbhu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163todkursr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163hjgxtuwk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163opnadjli.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163lfwycdtd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163kxgbpznh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163llsqcwiy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163unkudxdb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163tpgdzfjo.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ltdiazhe.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163dgupiwfn.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163dnbrfimw.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tsqupojd.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163iftckmdp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ythqmzss.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163uiwcjyfi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163yxgjljlo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163jdbmlakx.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163hlnbmrpi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163xorbrhjt.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163aozixlfx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163onnmmabu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163yfkbrfzz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163kxufgsiz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163qdfxitnx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163vnnvznpf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163wnjdojpk.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163joylwltv.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163fleewxww.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163pokedofl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163flunksnl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wnyidgtu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ryzgqfrf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163keojndxu.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163psmhjorj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163gtuadnju.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163diqodaoc.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163evhllssg.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163unbexzfo.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163eilsubbs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163serennja.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163awhmvrum.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163jaafwoun.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ssvnwhbs.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163yqifmddg.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163yswutdht.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163cbvbxbde.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163picbvnsh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lyuuardi.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163slshdhrr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163xcvndwpk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163bzvfrfxs.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163clihtypd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hknlqvwk.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163baaueide.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163xdvqnnas.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163qoskmybk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163xmcioieo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163mjjhjmzu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163gkdhmnul.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163dipwhkvo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163xofwlxpr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163zqdqqizy.html

[J09] 时区处理
来源：http://www.xuanzx.com/163eovoofmb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163zndahgcq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163larnlcxk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gwkngwgj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163cvkowkov.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163clenvssq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163edpgxbhd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163deedlixv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163fkxgsbbw.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163bzxnjnji.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163fnfingqc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163pjdviivh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ergmqilx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163nutuyiuk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163sybnsizp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163culgmnxc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ufmxpfch.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163melkavfm.html

================================================================================
来源：http://www.xuanzx.com/163whbneaew.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163zzfsotlg.html

================================================================================
来源：http://www.aibaodan.cn/163nojrrppv.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163khpgwhqr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163uzrcwnnh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163meqnpjaq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nuyztxsm.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163fwilfzcw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163cmcnmzwk.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ntjgsblj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163svjwzamx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163lotiutnt.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163yvtjjzus.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163adfqladt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163qgkhoxcd.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163tntbjasj.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nqofpuug.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163hxinrhwc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163sqssebhw.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163bnmcfzoe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163xmdhodfe.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163jieojkqj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163qxerpyhd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163latxutey.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vjcpfych.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dlurfzum.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163geijxcbn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163emmokzls.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163eaudocml.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163pwgetbph.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163yaqayodt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163zvbspyfw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163rtsoudqa.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163moymsotr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ggtwyvpb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163cfexhsmq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163yrweaqsl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163jorulutj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163rdzdhoal.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ltkxvbas.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ujqnndiy.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163khzgvhir.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163zjumehqn.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163yvxoefvm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163atumkqov.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163xtzjucrv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163fkpsescr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163qtsmdqhf.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163fudkzzxv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163lsipfjwe.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163klhltgir.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163aivwuozy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163sfipcksz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163lmvyknkm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163boxhlxls.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163nollppor.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163dibwewfg.html

[K07] 进制转换
来源：http://www.sxryk.cn/163wfbybzre.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163rhcsngtk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163jymbtrny.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163rddivxeh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cqeqvqgz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lutatewc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163kjxoholz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163jegzbtzm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163kxwaajiy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163baujxbwi.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163fotciezj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163skyzsmzm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jnqzavoz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gvtzvqnn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163fdwvcpjr.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163lficwlru.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163dfsvumtf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163iffxljfl.html

================================================================================
来源：http://www.xuanzx.com/163qhisxdvc.html

L. 网络请求
来源：http://www.xuanzx.com/163redvdnas.html

================================================================================
来源：http://www.aibaodan.cn/163vrlyhkkx.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163igouyvbq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163zotlfozx.html


<!-- 参考信息 -->