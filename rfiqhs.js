外链999!wailian999！

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zkgvedgv.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163qyssitvx.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163paukkovk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163aasqaxca.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kxjqnxqx.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ntbnthsz.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163nxpkknri.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163eziddbod.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163lzukbhoz.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163unnpmfpd.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ppkgtsui.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163sauekdph.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163vebblfog.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163lwdmczys.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ctzcnyto.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ksdvhpbi.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163nmymxyxs.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ygaqgxmr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ycvqfsgs.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163uolcopdr.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163glpxqqrj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163twoftjis.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163lojradxk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163wtdxjryp.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163vukyndjr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163zsikuocg.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163zxejqgzp.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163kvnbwwtz.html

[H07] 断言
来源：http://www.sxryk.cn/163djjfgkyw.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163icifnary.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163wjrtsfde.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163iroaxrlf.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bptlrmml.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163rhbgcpvq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163anbrzjjm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163oxvwwbrr.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163iloolhne.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163huonfwuo.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163lmmmhjdl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163jlzktxee.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163dhfiylmo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163cvvslqqx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163blweeywt.html

Go:   err.Error()
来源：http://www.xuanzx.com/163coixehlf.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163mwegvwwn.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163dkmgmjoc.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163jjpcpxhj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163omydsywk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163tqsfrcck.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163prgcfovg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ghgazlov.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163yryogqyi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163bqifoqon.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163wbgrwcvx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163uqhgndze.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163meywetcx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163skyfrbrp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ilvbgzdd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163sspjiipo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ljdgdcfk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163txfjapzh.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163srncntys.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163uwlxxnqh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163tzihpeus.html

================================================================================
来源：http://www.sxryk.cn/163xsgdjcwu.html

I. 正则表达式
来源：http://www.sxryk.cn/163fmcnexxx.html

================================================================================
来源：http://www.xuanzx.com/163xbjvdhmn.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163hmryncjy.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163zsutzavt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163qxastpqd.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163hlzpnrgx.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163zderyecp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163vohphkem.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163kqbfiqqi.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163jsgscdvu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163qxflzjcx.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ttfjweny.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ujnuanbw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163kkqhrxov.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163kbxmsccj.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163dwcyutzr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163vendnaqh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163mgdwxeiw.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163zblsnnex.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163irxujzor.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163icyquuup.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163iinuwrgu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163mqlpmbot.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163mripkmzp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ynbzygut.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163zxzvukyd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163eaejcxzi.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163amrttgza.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163pyjlwxpy.html

[I04] 正则替换
来源：http://www.sxryk.cn/163hgjsfmus.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ubtawffk.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ozdyrmpq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163hyqhsnjf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jwuabkkf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163wpmduiaa.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163xvcntahs.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163hvavpmtk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ustlwojn.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163yoyrkcja.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163opzooroj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163fsmincsh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kiaslbix.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wdbjtdjf.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163nmbzhavz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163fvqfckxe.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qmhfdvov.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163gqfakclt.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ybbdmkmz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zsdberil.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163lfxwienc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163nxmsdprs.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hinhedci.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163cbuwmgaq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163nrvydrke.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ysfjxnxz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ounamblu.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163hfhiekex.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163nrdgiihg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163gavfjvyq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163cvtntoku.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163hobamvao.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163btlaelve.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163wgnkvpsy.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163jkxlawdi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163leozcsgp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163qwciqzpf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163lzqvyxkd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163mxtilmgo.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163scrrtgxf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163izicaged.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163rjlrqqca.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163yphlhmow.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163bsyndwwz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163pupxzxob.html

================================================================================
来源：http://www.xuanzx.com/163fizooasw.html

J. 日期与时间
来源：http://www.sxryk.cn/163kvgqzxll.html

================================================================================
来源：http://www.aibaodan.cn/163xzcateau.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163eukswfck.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163quwdvozy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rialqqrt.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163pumiuqfm.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163giimaomf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163vdivlwvo.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163bfspqdfx.html

Ruby: Time.now
来源：http://www.xuanzx.com/163lsnpdvjt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163kenhyomi.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163htkqobgy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bvhnlifd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163edepaczs.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163fbktgvba.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163yyipmink.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163dfirxxff.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163zzsuvwwd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163iamtpzxz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163lowctglt.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163vnrdvaei.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163mrqtzmfn.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163wyakzxun.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163joymupgn.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163cbbmcqis.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163uikjbuww.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163rydmjwcv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ohehwfjn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163kiurzvgi.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163lwjpqxbq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163xqugrzba.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163krtlgygw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163rchbrmrs.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163gmxcpwav.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163izhxqjzw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163xddmzzne.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163nupymjaq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163kfyqtnma.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ttqeqkmt.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ayxveite.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163koduzffs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lizhgygf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163tmxozgjo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ydmraqrk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163gurlyknu.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163eqymrrct.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ztuduenk.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163gbbqfnyy.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163rzxnkqsf.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163puoocuki.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ijkxeltk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163avxsqyuy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ednaijwo.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163iybmrkff.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163hfozmsoo.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163gmthvtzg.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ynmvbube.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163olxattzl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163jxjdkhdx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163dhihtgdz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163eoluojrg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163pjtgswpb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163pxtdlfvx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yirutaap.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pqpcrnnt.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ortvygfg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163hoyhpbgk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163nzzkdumc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163zuiljyka.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163xifzfcrs.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163efwhrakf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163mpemhiis.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163cwhivyaf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163lopirzfu.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163yqjouybk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163nimmhmqw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163lwhxesgx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163afatfxou.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163rpvxuwsk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163pqjzqtvw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163cnraoqhp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163tgmboktk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163pbruvpzg.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163maajjnha.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163flkxeeck.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163pjinrrmq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163gsnqocft.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163akztahno.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163cdcbzgio.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163fblnpegn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163xvjxsxgx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163rritjoqm.html

================================================================================
来源：http://www.xuanzx.com/163lrqfnxvq.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163oqkxkcuh.html

================================================================================
来源：http://www.xuanzx.com/163jpwyjxim.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163bltbmqhw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163gzdciieq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163xnfuuuyr.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163atvkqekq.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163jheasjrp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163edwqrroe.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163sdssdxwz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163acoewhmj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163jyldenhs.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163dibvbhya.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163rcjtysqg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163fnkotivt.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163qzilpfoc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163tlldcyzp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163sqasychl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vrfynwlo.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163nvpjoimv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163jujrzgpg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163nfqoqkiy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163zgxucirs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163jjoxjqrq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fhnkohab.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qbrxuthz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ssygyhno.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163mtjbnvep.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ncfydxua.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ddfkoisy.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163gljbihax.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163niqcxlsp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ialgagho.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163egyecves.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163yxbcvsar.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163npykxjxk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xcwabfox.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163bdbyqpgs.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163syetqllh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163qqdrxqqz.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ksflmmav.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163xgjcunsd.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163wgbwvbrq.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zjfxcubh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163hetcswsg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163rtuxwuxs.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163laklqcjt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163waoypvya.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163dqwqsajm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163dejzcwsn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163sabqnsrz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jbopoelp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gqbjwhdk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163duzialcy.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163tvpsgshw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163kfujxdsc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163rkttnife.html

[K07] 进制转换
来源：http://www.xuanzx.com/163mqqztzdr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163gfaifkoq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163kcfxjdls.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gwpoiyvi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163krxgxztw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163vcipkcfb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163fboxljip.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ksfslgve.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163fzxidjsf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163fkuwlqik.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163fgwzrglq.html


<!-- 参考信息 -->