外链999!wailian999！

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163cxurdqxx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xujzvcoq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lakyfasd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163spsdiprs.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rilfmgtn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163aamjbktx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163cuwcefom.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163mwmaqhfv.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163sfyhhkcc.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163rofzoqfh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163irbbuvqg.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ansgokif.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163tilcfbqf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163pazqieuq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ofaeldfe.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163qaddusji.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163iasybwgj.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163rzjleeog.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ewfcbtwj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163makfilay.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wkqfzxxy.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163dfhuscwh.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163bynrgkwo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xnyfnaks.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163iejtetnn.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163gxwzckji.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163gbjdbnvq.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163fdqmqgww.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ozwluqor.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163yghbplzy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163zrzggkho.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163vuxgaawv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ilmjyada.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163hvfbuzsv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163czommjke.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163elyhausb.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163soaoruvi.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163obadhdiq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163lukumqct.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ikyyclvm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163etjhbesz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163mifzdcpq.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163wqveafqj.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163nhbenikb.html

[H07] 断言
来源：http://www.sxryk.cn/163jrqecgme.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163slkckllk.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163mhdsuafx.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163iexmvoih.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163nnppuuzo.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163zhdelxxo.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163sgkrgnaq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163evvpsifv.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163mzxbfbxe.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ehgcawoy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163mrcdrqmf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163flfvspbp.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163dshharsm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163fzsczkzf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ghkjqsys.html

Go:   err.Error()
来源：http://www.xuanzx.com/163dtiuerzt.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163kudrmxpb.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163sbkvxbmr.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163puuxbbwd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ktfnmrwc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163nnuydyxo.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163chhupsbu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163tncnphzr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163kokyjibe.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163uywzuong.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163kgjsqibh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163fsqyqyrs.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163pvzktdwh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163xfyskbqw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163heoyoyzy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163hwjxiwxl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163iwkhstym.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163rmdbiywl.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163tshzwvrk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163yesgkpmg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163xbgpapsv.html

================================================================================
来源：http://www.xuanzx.com/163hcvlivoo.html

I. 正则表达式
来源：http://www.aibaodan.cn/163kvjkuiro.html

================================================================================
来源：http://www.aibaodan.cn/163djctixxq.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163yyapzrph.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163knlhlrjs.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163enjpkuwn.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163psxhlwey.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163yxlqddts.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163sntzvuda.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163omnrnegk.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163giakvbuy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163wmnxftzh.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163jprciesq.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163nhdinjsa.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163gfywtpqt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163jxxgnuxc.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163jcjjljig.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163grahjuor.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163zgejmdje.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163xdhkeoqq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163nnrwrlxh.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163cxghfbfu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163wtukzybl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163eiqorpxq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163vsalcneo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ggraskti.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163anxlhorv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163iqibehdj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ecgnwmno.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163tvoxulvf.html

[I04] 正则替换
来源：http://www.xuanzx.com/163adtgujfp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163wekjczzk.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ptikbvab.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xaazfulx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163fnatykhv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163tfxdjwet.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163vbbbvdvr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163dglxqujk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163trdhzjvu.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163xbmawwuj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163anuvoxll.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163rppsrneg.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ntllhyus.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163stobxlgc.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163xshbkraj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ethtpwth.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163phrwncrv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163wcgebpzw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163rwzzwcad.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163yfabvfnu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163lhkhtibl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vihreebl.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163yppxqbbp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163chhoqucw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163zsdowzzu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163djjqnlqe.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163kcljhmsi.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163pqqzimcl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163tqgzezqf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ydgxeqjf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163rdhirrdr.html

TS:   /error/gim
来源：http://www.xuanzx.com/163izzufxsu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ntabotqp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163funmgkvy.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ttgunaop.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ymnjjdkl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163mpwmiymt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163zxjovpsh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163kuqconur.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ogepeygr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163zuiyvjym.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ffhfbywf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ctgseyqv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163mvrhkvtr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163lwtwyaqc.html

================================================================================
来源：http://www.aibaodan.cn/163lrtiofcg.html

J. 日期与时间
来源：http://www.aibaodan.cn/163gzwskoqi.html

================================================================================
来源：http://www.aibaodan.cn/163dmmdwdlk.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163dzwzxyap.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163oydnkhhv.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bwasqzyz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ijquutow.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163kogoqfjb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163jfhkeovu.html

Go:   time.Now()
来源：http://www.sxryk.cn/163qhjnbfcm.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163uiozznci.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163wwnpgwgp.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ohkydlpz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163siyickqy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cdibfdzg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163fylwqoxu.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163vwvduhjl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163vrdhpybu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163bkseuchj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163nvitjuyp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163exwbcfik.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ghfyfymi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163rjrekqad.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163tvfgzgbf.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163nipmxiwf.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mrzkoodv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163msccvcmj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163rjuzquyu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163omvdnfbb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163vwhorgbi.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163zltxsret.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163cqljuqia.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163enuugndr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163xoiwewpj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163hdazpchz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163zylbiytl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163pvyjopmt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163hlambauf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163rmbopyya.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163odiqfkek.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163xwzgfhoi.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163rjwopweb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163tdwyodbv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rudxxqoo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163eyqboaqk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163unhgypbc.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ncaflini.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ryurdrgf.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163mmpgzfvc.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163vpekeskv.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ppaqmcop.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163onfhcugy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ubfshlhv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ihafpmbd.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163lzjcfrah.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163yvzuscdu.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163kvochhez.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ajvvwlub.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163sdzxqynw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163crpfgusb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163dlguxfwx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163oqgzasru.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ezfjbfhd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163vwlirmuj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zgfpjcdm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xelrsbke.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163vhuueptq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163lpokfyaz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163lverhfkz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163qvicmmdn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163wxzyntyx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163awmokzyj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gmahwwzp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163fzqawazi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163xjfytvis.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ssxsygel.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163awtitcsy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163pgprqhsu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mxeasivr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163dvtmrtty.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ypwwwozb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163rgbosnjv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163tjemkakz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163bvgjjhly.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163zwtfnoxm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163naqgzmth.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163huzjnxdp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163lgfkoggm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qrfxtgvo.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163tsukdret.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163wicccggw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163msouvtyp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163blmdjhmo.html

================================================================================
来源：http://www.xuanzx.com/163eshvevap.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163bpevfcpq.html

================================================================================
来源：http://www.sxryk.cn/163azxkidfc.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163roiwbfqt.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163hffwprjr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163nmdgfdis.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163efvyxmeq.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163plwnleql.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163pwgukfgw.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163jcyhgpfk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163lhfjfgak.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163hvjhhpjk.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163jbndexxj.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ixqdhorh.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163coybumbv.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163btnmufqr.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hzywjcly.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163aungetsb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163pdrlzehi.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163vukrzebn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163orsejwcl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ypujyshc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163hrjahldl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163rtddqyhi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163lskkrzsn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ufnvsits.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163oscrwoib.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163rljatjpb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163nhutbeuu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163nhzhzygy.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163cklxtfzt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163xqrjdoln.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ujburixr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163zhaezkjn.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dmgpokfw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163kmjcvfly.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163omnjuood.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ntzrzaup.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163xkwsqili.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ocejilkf.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163erobtdxk.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163xlyiqdkq.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163aomdqeua.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163svoannlz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163egbsgvqq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163hmqvkdrr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163vktyehmy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163scoxqsee.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163feljkkrl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163cqxrhqjn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163wqpjvvic.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163srzcnoix.html


<!-- 参考信息 -->