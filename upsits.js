外链999!wailian999！

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163musyhkwb.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163yrbnecpp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nopmkqhw.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ubmjkvyu.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pagxawqv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163vsqvfxqh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163vhuatxoo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163igvuxgzq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163bdsncvdq.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163oracyicx.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163lyufaoti.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163edtulbfz.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ihoopzon.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163pmoejyit.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163bfawpkug.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163cvtofrrb.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163zrfijceu.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163wzncpbxf.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163iuczwcnf.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163dambpbgp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163swrzqudc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163blrdpgby.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xpmhcyiv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163onuwslzb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163kgfnhzfh.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163tmxshinu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163yomgmqep.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163qfiphoef.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163gdlkptzr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163fsbercmz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hszroaby.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163mbyaahta.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163zfvxzswl.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163fbaiztdo.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ejtfypvz.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163eydqvvwe.html

[H07] 断言
来源：http://www.xuanzx.com/163blbhotjl.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163pkgmxvqh.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163lewquwny.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163pudkloue.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xkspbnoo.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163qiyamrnw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163kwaemurf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163nbkkyzzo.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163hvjcbuwe.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163krpzehsr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163handrdui.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163iwcbifxt.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163dxkqfxfl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ingqwstf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163izykykbv.html

Go:   err.Error()
来源：http://www.sxryk.cn/163jgkxmzft.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163shdrflkt.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163rworgcqs.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163xqeppoff.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163raoytbqj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163iuhbbvde.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163kenyeizv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163citrtbyi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163wcmxapip.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163zmmmaxmg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163uologjvd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163hbcdlvrc.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163zrxmxbrw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163lzgzeqjf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163zzcifrwg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lzwgigge.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ahoifxiy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163iisecnnw.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163itcdtpxf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163uxvsgyyu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163mmigmuae.html

================================================================================
来源：http://www.aibaodan.cn/163zhckgnlz.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ojkxbwbf.html

================================================================================
来源：http://www.aibaodan.cn/163wmxdpwjv.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163foizbjxe.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163qqwmpnvm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163afucgqnw.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163lsfronky.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lszbazmh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163pxvrmwek.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163liytoari.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ekrhgqbq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ivbayxks.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163exrjnvvy.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163kxlxdhxf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163gylencty.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163rpmqotqt.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ftdoqdeb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163jshldyla.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ctiujdni.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163hujoemwp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163zrnavwrf.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ushvneuz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ngkhylqt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163xhkesfak.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163obennryi.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ipanyevd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163gqdncfru.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163zkhcedjw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163pliosxyx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163hrighcbn.html

[I04] 正则替换
来源：http://www.xuanzx.com/163qxrgjkbf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163iqmcdlsi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163achujewr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163qazikjxs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163celznnds.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163drkuwipg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163dqsqcusr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163jydrqlfx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163szicvnbm.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163jecbjynq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163botkdbsb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163udxjbdho.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dhvneplk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gsuhpdjd.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ubbjwrea.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163xykiqxxl.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pexujqvb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163qsxowesn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163jwxbytjs.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163yrysotfc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163dcetxgof.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163hiipkbzl.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ripcdadi.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163vqwwfgrk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163hdeqlllt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163luiexbvt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zogdjshx.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163tyhbpyuu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163bsosdawg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163folrpgjp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163xnkwxwia.html

TS:   /error/gim
来源：http://www.xuanzx.com/163yhciscvq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163hjkdcktb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ogzpikua.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ugbfzexy.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163laqpbuwd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163blvgkrrk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163xaljszty.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163abdstahs.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163apannidf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gxmppobm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163xcmdizez.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163lgkrfbrt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163pvauvehs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163qfqqnhid.html

================================================================================
来源：http://www.aibaodan.cn/163guvonhfc.html

J. 日期与时间
来源：http://www.xuanzx.com/163pdxpucvg.html

================================================================================
来源：http://www.xuanzx.com/163ulxgzgng.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163bxqcsjyw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163fxshtgzz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hssbvbbz.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163uzsbkojj.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163denkstfu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163hjopwwrx.html

Go:   time.Now()
来源：http://www.sxryk.cn/163lpizaysh.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vztqcqgi.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163hwlinqxn.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163btpuqcjk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163krerfxaj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kntiobxu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163cvnfgpde.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163qmylcemx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163tofybrib.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163cvsbzhyt.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bxxoeetf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163fzzqgmfr.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163hmltznwi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163pvxbtjqa.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ohiinqtb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zfqgnbhn.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163epnftyic.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163sylnnads.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163lqaaruks.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163psfzekoe.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163tzyhrhuq.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163qupbhxns.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163nzjocawx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163cjtarhfe.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163mvhtsjci.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163oksulorw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163wfieyxcc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163domimlml.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163edrjtndm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163whgmkkzs.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163qvskhkoy.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163eaprlghc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163gcdbrazq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163etydddji.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163zsodwvqy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163uygonfyt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163bwihhqld.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163uaeszttk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163bdcoqdlh.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163rvblmbiz.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163yudzvnch.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ggetgxcn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163pbdxykoy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163rgytyoko.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ayrqzvnn.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163kwumpuei.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163mohdhboz.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ujpmemny.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163hmgveuwg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163egcaanwg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163zibrinor.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163dfkkvyod.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163bjegldcx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163gnsvrzif.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ejgnanxo.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sgxpohrr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kvhtjnle.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163kgigefsd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163wkcgeoaj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163laabckio.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163twjfdcbm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163bvgtjihd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163caaizsrn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163dlhpvyrn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163qqrgvzai.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163yflpdruf.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163lpkmbili.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163zhkyucei.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163imxxtzst.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163uolqkxbh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163mihestxr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163hrufurtm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163antizdoj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163lbqnnteg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ofdvjnnx.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163wkuhnmhg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163kurutznq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163dmebsxts.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163cigivzyn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163jitrhtlw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163wolelarv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163sixxplzb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163yistrcox.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163fwlylfvb.html

================================================================================
来源：http://www.aibaodan.cn/163zotkevru.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163bukpswrx.html

================================================================================
来源：http://www.sxryk.cn/163cukrevmo.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163clmgqwfh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hvchacyq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wlsjgcqw.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163kkgstumn.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zbtgwaax.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163nqwtecmo.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163vfxmhmpt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163xaqjufst.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163mxmwkltw.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ijujpgxu.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163vfjlpnuf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163bpenoljo.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xzprzrbc.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163yubgiaij.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163hpwdelxd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vfwkkdwy.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163tgtarozi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163kkscmcmc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163gxrlcuxb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wwtsunwu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163xhgggdgv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bzpizsju.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163pbbwxbuk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163aexyofph.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163wgddjxsp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163gyvrruty.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163kljfzkje.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163vpkifufq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163nesqynoa.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163zwylgmxx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163dmqdhmem.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ddfhndva.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163yplrrvaa.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tlslzvgk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163jzrpwqhu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163sgptaorq.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163babtreka.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163dkhdlzrm.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163qpzwsydz.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163cqzhfepj.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hdaltqhp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163qnrzjavy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163lyofqybi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163rahkxjuv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163oecxaftt.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163pvgcfssp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163yjgtmogo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163yucrmvax.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tlgzzzop.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163chvodaaq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163taainpxm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163asfoifch.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163zpbdqgiv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163mvhoayrg.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ntursnpq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163cjncxgli.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163gwnithyy.html


<!-- 参考信息 -->