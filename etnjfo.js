外链999!wailian999！

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163lbhblpik.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qqqdoylp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nhcqoyht.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cqnicjkp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kdukhklj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163juqpgalh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163spljjxje.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163jufbnnwg.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163mkszvfve.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163sidigkaz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163qqybuerv.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zytbbowr.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163izxknxql.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163qqddifwe.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ibrsuoti.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ukemfljx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163srkzwtwe.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ujnjasht.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163rmawzwyr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163vynnatbc.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163xnrxiqbe.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163quxbjnou.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ohhngadn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163zzyflwua.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163icocrmna.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163wmynbwbs.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163gugrycgv.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ckzhmlaq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163asdadnap.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qqdahnjz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jdddiqnt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ygcwduym.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ovmdffvi.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163irunkooy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163opcmtlds.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163mocmfbpf.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163kceknmuf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163kykmsfkx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cdmfhnrv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163dgjjzmod.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163fjworczn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163nnipvbnh.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163lqkdlgyz.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163jddpecyw.html

[H07] 断言
来源：http://www.sxryk.cn/163hofsdgrd.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163kljmblwg.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163qycpkzyy.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163grbpybor.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163akakavmh.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163gouwmrcf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ctvmfige.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163pigjnaie.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163efwizncc.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ckkdyiif.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163xxodivbh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163kvfqqcyt.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163lggmwzni.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163svfxsyqr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163orgbarzp.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163lctupwxd.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163wqnhwvsc.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163kgbcyykd.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163mrhreper.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163hgtemild.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163rsuiwyim.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163szrwmouu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ykrfszwp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163zderawzi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163fwasvrhf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163xslgynpc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163zaicywex.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163udqkanln.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163qtnhgwgq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163zsaeomup.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hhzegeme.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tcutrxmd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163xbjxyssy.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163esdurtih.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163cvnpgdcz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163gbxbwlpx.html

================================================================================
来源：http://www.xuanzx.com/163nitkehjd.html

I. 正则表达式
来源：http://www.xuanzx.com/163oayrfoak.html

================================================================================
来源：http://www.sxryk.cn/163irtazsyd.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163zffonhez.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163wadfhngj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163qehxwgfb.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163jtvewhoy.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163chkovhhf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163uabuljsm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163csgoflka.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163uvcgneuv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163xuswhnmx.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163zgjdvixu.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163tkihoubu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163umpehcwo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163dwmpbxew.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163saniolwh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163fwicrjoq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163igudlxhl.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163lpzuwhnl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163munajark.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163vqfgzlow.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163bbigqulj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ogjnlncu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163cbcfbcak.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163clwsjckw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163wdydptec.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163xwyacmjr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163yifavisn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163pseisnts.html

[I04] 正则替换
来源：http://www.xuanzx.com/163irchkujr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163sizekqyn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163twxdowfw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jokoihcr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dvlmgnkr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163exrxebui.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163bhdzgeaj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163mqyotbwp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163wcjcmvea.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163gqgearpv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163laqttdjl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163pucdzmet.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qgrgicfl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kehmdvzf.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163cvhgkqxv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163qpomtxjv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163etibexjg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163lltiuipz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163iamlmusx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163abothkfe.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163aceammoc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ilsnmwhn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163rtxtcwsx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163etocxcur.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163lcueesla.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163xquhtpnf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163corzuapc.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163gsudyfsj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163xhdnbeqq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ogsoqlju.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163deynrnnh.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163btezdazt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163kzyjyzvi.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163djosdshb.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163iojqyegm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163grhtfpsl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163zhehskhl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163adludwqo.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163watovtnv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163uynzadca.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hrivnlmo.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163syuaiszu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163sxlurgzd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163smphkymh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ujbwfmkh.html

================================================================================
来源：http://www.xuanzx.com/163hwrxxxnd.html

J. 日期与时间
来源：http://www.sxryk.cn/163qalkvryn.html

================================================================================
来源：http://www.aibaodan.cn/163afnrvpny.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163dxsuimmr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163yciczkvn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163tiyjynpw.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ckpmrgtv.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163glrtpxpi.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163zhtdqmyj.html

Go:   time.Now()
来源：http://www.xuanzx.com/163iuldhzat.html

Ruby: Time.now
来源：http://www.sxryk.cn/163avojgigy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163debkrgiz.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163xtduhcfs.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lskykrig.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nuolnfpz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163wvzuxhqz.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163gjkmxqrf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163zxodsvzd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163sdtsngsc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zaxdiiky.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163muwryele.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163lohpeatx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163tfvkwgtp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163grfupgoi.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ymippqfo.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163spvdcziy.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vkxtnkky.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163clvdlsmu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163hddgwzhr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163yekkzowg.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ztzruitm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163epgorbvt.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163zfzxskqk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ahzlupwm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163qrpshyml.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ehirybte.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163imdqydzn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163chaurssp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163bnlitizh.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ryhejbcd.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163qimahgqg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163lgfxhnds.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163oxnurzqv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163isqkzegu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163dfcbcwyh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ywclarij.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ivyapprb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163hjbkzkfp.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163huxsxuch.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163wuehlfcg.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163fskqfwre.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163gpwmpgfh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163dvjrilpa.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163wyqulsur.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163kmdermkp.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vrukgaht.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163xordthqx.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ncfdkrmn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zvsjtfie.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ualoxmsk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163onnhukrv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rbkojske.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163mwuzsukl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163unybbqut.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wkblmqry.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wvbnvstt.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163hkkomggv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163iuoiikle.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163gszmfuej.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163khfohvxt.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163kavcsgmh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163wdsbtxvx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163nfyuqhzg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163icrrjoif.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163phlfashc.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ndxrczrb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163yddmkpjc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163mxvzfepy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163rlgaycjz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rcuorvhh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163mpmxcqzo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163fjyytbdb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163rtcwyrqj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163xxakpxcu.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163woqtndjl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163gkzwbqqp.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163tfpsuuwy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ukcfmjfy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163eyhchgta.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163nhhhpmis.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163berrbvjb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163nuoowhyy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163rhsialhk.html

================================================================================
来源：http://www.sxryk.cn/163xqqqrigk.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163vhnlkfid.html

================================================================================
来源：http://www.aibaodan.cn/163uqxqyboz.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163hnnzxtbd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ryninbmn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163jjiymtzq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163pkwombyi.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nblmqzxl.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163xuqqiwhu.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ybqogzmv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163crkfhkdo.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ggfohzqw.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163rafxxhac.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ghtqymws.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163kevlmefl.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163szfmmphr.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ggqebzex.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163mtuawsuu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jjenuvgv.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163nxqgstrz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163pwwosxmu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163hocjyvkz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163smmnadki.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163oqirnbkg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kcichdny.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ydeeuudo.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163kylpzvbn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163mhlbipyz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163dnqnonpv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163dtkbhsns.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163figjnrkg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ujldjdrp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163dhefcphb.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ozmxrqwo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163svcoxjpu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163tznyagdy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163hgpuavyf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163nmcizppv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163vsfxujsg.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163tbmtnitx.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163vhviqmle.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ljorioos.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163taxiqthb.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163uejsvvvg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163omkdxkjz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163zpcbldbj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xxsslcmb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163lwedobzu.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163yifaydpl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163sweprsck.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163oefztzhn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163lfnzftcj.html


<!-- 参考信息 -->