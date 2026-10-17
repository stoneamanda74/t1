外链999!wailian999！

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163osxojrll.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ccxrauox.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163tcrniftv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163naffxxvz.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163tdukweyp.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163oqqbnpbj.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163dcllhffc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163tanxkayy.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ygubfalu.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163dlozmaof.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163mjqiuyls.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163gfpoffug.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163gwszdnex.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wcacpeal.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163reeqeevu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163redzduye.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163qxydnyvl.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ogirkzky.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163bnmbehjf.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ddmhawjs.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163loytpcqh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163qelgmbsp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163nqbwswqe.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163atuunhem.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163wxhnqqgu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163zlwuaoci.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ccchtksa.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163hkvuenft.html

[H07] 断言
来源：http://www.sxryk.cn/163eunjkyus.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163gylcsgbg.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163yiqgmwck.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hjhrspvb.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ayvuthpz.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163lideuazi.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163irgmmnah.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163xrcatrxt.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163umktrvnr.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163hrdirorq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163lhdkauzk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163lshzpabr.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ysemxanr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ormclron.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163xpstyypc.html

Go:   err.Error()
来源：http://www.xuanzx.com/163izvrjckj.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ghqqnuqe.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163bfixqkkl.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163iwfliiwh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163pjbacyho.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163opqzjkae.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163dxbmwyjn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163djjluneu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163rbfvryuk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163nccedish.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163swnnfkrj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163xnbdqfuk.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163khprxxxd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163jcfudcps.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163vptnhfof.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163houmblll.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163kzltmajl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163soirdmiy.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163llvnthkn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163lyuzcjzc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163hkhcfckw.html

================================================================================
来源：http://www.aibaodan.cn/163jnroeuko.html

I. 正则表达式
来源：http://www.aibaodan.cn/163zrfkweqv.html

================================================================================
来源：http://www.xuanzx.com/163zegnieyo.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163pnuhmwxi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163zwjgfeko.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163hbxeqqxn.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163xbzdsbeo.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jpbmgkhl.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163jmlxbuxs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163xxanwoyg.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163yvwuqgvc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163rnqimaxj.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163twrwarlh.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163asphuedu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163nldtqyzw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163zvzrixcc.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163wukafjge.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163djbfxtid.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163venvzfdr.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ubsbbnil.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163wiszxtof.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163tidishmo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163czxfwfzs.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ijonaapk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163lbidpvqf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163fyunebeh.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163pmwekagq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163spqyzkpv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163pohdlkar.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163mfstowkz.html

[I04] 正则替换
来源：http://www.xuanzx.com/163brmteupa.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163nbnpugxr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xwtaklsn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163bgowuhub.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163oweuyifs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163mrhrhtyc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163rklvrnfh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ulqwnavl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163oybbqarg.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xkquywqw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163fsrpmfdz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163jghgzqby.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bozockal.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ubvtstjy.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163vmywlxrb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163xgcnvyns.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xlcwdzmx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163oqkvwsbe.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163prhbhslj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163rqzqlore.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163vldiciyq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qnwlybje.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163kpezxddo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163brevjwcw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ozhriabg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163mbwxtzkz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tsueznif.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163lukqoieg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163nzbfhpai.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163cfcdbecy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163raqjyhul.html

TS:   /error/gim
来源：http://www.sxryk.cn/163waelolad.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163khoewyev.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ravxmqxl.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ljkiqwzv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163bdxbxlng.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163xhstcyrh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163qleaboid.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163pdqkyuoe.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zakdpkai.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163bqmpbpzv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ktnfsnsn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ujymejqg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163civhiffq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163buolxpdg.html

================================================================================
来源：http://www.aibaodan.cn/163pfisrcwm.html

J. 日期与时间
来源：http://www.aibaodan.cn/163besevoig.html

================================================================================
来源：http://www.aibaodan.cn/163yaepvcvj.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ohdtubls.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163tgmcqyzg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163buaghfkn.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hihqprxo.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163njzyqmcl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163xpfejiml.html

Go:   time.Now()
来源：http://www.xuanzx.com/163fdcuizhm.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163cauqeutc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163fdjuxdba.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163gdqcxecu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qdxrubbj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xbgujzjp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163npmhlwkp.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163hdvvijtd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163cfcomjsk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163syesyvfo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163plwmmpka.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163fcszixax.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163kbkqjahg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163rxyepfrb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163vhadtzgb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vbmxncon.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163cvxnyyfr.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163hqyxqqyu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ywgskzeb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163kkfhikur.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163bztacvtp.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163oecgzwbo.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163otbhctpd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163xplsxmmm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163tqnkuuyx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163nivjuymz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163pveodznb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ccbchhoh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163gtuqbdjr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163azfnvsfr.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163mbfovjel.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163brjlqkhg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163tkbrtbjs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pqcubeel.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wlkifdza.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163oizhwlfq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ntcrlkzm.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163efdzvgbh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163akkpcask.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163joxirdhn.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163efscavpg.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163uiagxvtk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163pwxtrxvx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163mohfqldt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163bzxjiedn.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163bsvjefeh.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163dwqutjne.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163xqkeudll.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163aiimolir.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yqvmgeda.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163phzfrwsq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163sidusnll.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mphgjplc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163fqskelqj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163qudockou.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pjzmorsa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qfdjbzhg.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ricnswvq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163sbpsgslm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163lwveovcw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163pnleojbf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163rtyyvnqr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163xvisrifz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163wowjktlj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163swqalajy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163mimekirb.html

[J09] 时区处理
来源：http://www.sxryk.cn/163dyfckpfm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163onsvxwsh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163rplbvvlq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163vodvxpzs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163phehfyrx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163kyxayaez.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163tfmjjriz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163vwotnrot.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ilmdnghb.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163duidgpdx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ypswvuww.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163dqtuqzdt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163laogrknn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163mvkksomu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163fhzuxrcv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163evmnkbew.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163bmchuyqi.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163dopshqct.html

================================================================================
来源：http://www.xuanzx.com/163mepfqgcw.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163psebtieo.html

================================================================================
来源：http://www.aibaodan.cn/163hixchakw.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163wjptmvcc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163auwstysk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163yyridamq.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163kjuvavzi.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163nhxlimxf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163wccmiiqj.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163avgkmjga.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163syrukzwb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163nwpnoraw.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163bkuxjaxk.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163vymrauze.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163sjywsvwu.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ajchypwn.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zgtlugbr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163nmkwkaqg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ejazzerr.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163jzwsvxgu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163xrcrmgor.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ttrmkeub.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ckpyhujo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163gldcdyfv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mpjajynn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vxwuxztj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163zfkcwvci.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163xhryjfog.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163sbjsbkvt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163jdbwomfn.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163fkkwvcyt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163vwhpjzmj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163orzwywyr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163huvjflgx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163srssxrrl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163mvzrazgj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xdozgwbw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163amxfyvct.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163pqaaedjy.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ymbmascj.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163vrfyfvau.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ptzkjeos.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vxafliuq.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mgmiacnx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163rfugepmz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163vuozvgyp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163vibdmbxx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163hrrxyrpb.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163rwwunzpl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163hcdrfmps.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163joeimifm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163rehvyqvw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qoicdeqn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163souvtyfv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163qebjfxjf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163oziwzzri.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163cufbwrtr.html

[K07] 进制转换
来源：http://www.xuanzx.com/163oxpddbob.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163auemephj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163dmermnpa.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ilcpyjzc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cusrhoce.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lvouaxtm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163jvfsrgje.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163gsbfzlck.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163jgqfmiiw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163dlhdqfis.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163thkxijyb.html


<!-- 参考信息 -->