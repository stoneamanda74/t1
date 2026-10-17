外链999!wailian999！

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163dewtbedc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163hrtpjggt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ovtfmali.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ysfkvnfi.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163nrjalerp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163bygqikuy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163jydwagdv.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163nvzgxzbc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163etqpldfe.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uajjuinn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rdvlyuzv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hmqlkyfl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hywipqqq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163uwrisikg.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163zyljmezb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163fvjqzeaa.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163cloynnwd.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163djbimxmr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163oimfejuy.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163wgxsquye.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wkqlliqx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gshjbkos.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163qablvlrn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ahluaybb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wkjrqdss.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163nwvcvode.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163urpdjcgm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163horvfwgp.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ckfnxcqx.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zcajfclx.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163uwejbfcq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xxwpjpbx.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163pmcgzxyk.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163zzedznlp.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163atwaevty.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163hlduswfj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163bjddycds.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163onwpepmm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vcksmlzj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163nynuufmp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163nnzwjlxu.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163bijlgaqx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163wygcasej.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163dhptirlw.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163ebbfrztd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163npeapobs.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hkmcgkej.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jgzohaso.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163chcglkxu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163bqbseyyp.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ezbjfgsr.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163lrmjcrwx.html

[H07] 断言
来源：http://www.aibaodan.cn/163caizvsmu.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163gbmcvxvo.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163sdsgkgja.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xujavnqc.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qybgvpwm.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163vnwcruab.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163zrdhkuwf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163oeauxbng.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163kvhrxtkq.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163enendqxy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163jjblznby.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163dcsgqspt.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ormdille.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163uvtamgui.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163zccmxwqu.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ilprkomi.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163yhuftker.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163sazhvleg.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163snpyrfnf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163wlxygtep.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163eadlsimx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163advwccby.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163eexdjihd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163dxgbpsfw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163eezzjlus.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163myurrvhq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163tuqfrfut.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163oijjurve.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163rkqbxafc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163hqgkagmt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vipdbcpd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ksfenrtu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163szvxhayo.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163xemzanwp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163sydtlaet.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163oxvgbvcm.html

================================================================================
来源：http://www.aibaodan.cn/163tkeypvyn.html

I. 正则表达式
来源：http://www.sxryk.cn/163fgnkpspm.html

================================================================================
来源：http://www.xuanzx.com/163dyszelnj.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163rkgpuodu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163frzwrler.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163mfzliolz.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ilugclrs.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tpupjeuu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163udfuufbv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163wzhjzkmi.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163heglmuex.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163hapwiwyl.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163zviupmkh.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163ucblpevx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163rncqcbni.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163hzpibxtd.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ffuqemch.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163luadvzrc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163fkznplog.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163sjrpcxmc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163jxfaqxym.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163qsmsevcs.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163drrrguks.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163zqwbuhms.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163jbqcdpdp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163vkxvkabq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163xidmqkgg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163cpknsodq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163dpzingji.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163znitlubk.html

[I04] 正则替换
来源：http://www.xuanzx.com/163agdvwdjk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163fvaleeye.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163cuxbbfve.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wrkotrmw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163gyjdcamb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163tvwizgxy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163rwvppnfs.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163vdavspiq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163szmhcmto.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163yigrwjlm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163wjilludw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163xqpicudp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sxacwgof.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163drcqfqfd.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163buxresre.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ljsvzabo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hadywlpa.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163rdtzchbh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163lhroprvq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163rwiymllr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163sucplzew.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163btupayyd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163czxarjcf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163oztjprhf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163hnltueim.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163yxmtrcdl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163wpizhflj.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163mwqsucnd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163znxhuygp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ittjtrdi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163qzynimaf.html

TS:   /error/gim
来源：http://www.xuanzx.com/163cpxcnfbn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163yfnizkef.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163fogntqmh.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163hehthcze.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163vxniaagy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163tjwtotgo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163bqknmgnp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163mmaeujnw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vjxtfihs.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163anburrtp.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163qxrpotbj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163bihxkset.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163hqvqjoxx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163slrmalch.html

================================================================================
来源：http://www.xuanzx.com/163tvkyvwkc.html

J. 日期与时间
来源：http://www.aibaodan.cn/163erqiefau.html

================================================================================
来源：http://www.aibaodan.cn/163ribypwvf.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163wkgreila.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163sbarhngi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mhymjkzu.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163kmtvpwex.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163zzuxpqpv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163whcpkfoc.html

Go:   time.Now()
来源：http://www.sxryk.cn/163npbvktdn.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vvvvpuxm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163kjaezvqb.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163wyhzixra.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ogqiifxt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ylcvneeo.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163opfskaco.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163piynwxny.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163nzqutwoe.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163vrwpgzgb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163aztbeczu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163maakmmiw.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163waegmovf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163olxngcwc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163eagnaplt.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163xlsapcmk.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ghlgfisq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163qflrnanp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163kljrdtnt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163rgblhgwv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163rmukzpzb.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163jgrljdka.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ssoesmbk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163idvaaivd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163oyjpbriu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163fhuxnuhb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163gxdezktb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163trcfoxfd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ncsorbgz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163jjxeajyl.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163kmrpqnbz.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163tbspkiof.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163ttnhmpkq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163kgqvtmnl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163kdlxvwuh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ofvgojxm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163udpgczpe.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ackbegrf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163abeslpoc.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163cuklvnze.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163runnbksj.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163iptsfzmk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ehdsecha.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163kcrqzwwc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163oimcfhzp.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163xlsgxxfa.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163cfescxxu.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163qkyhyrmr.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163huihbgup.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ooovvhcp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163tisbljid.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tewloviu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cshtityr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163pyqfauaf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ncpisjsq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rtamgpvw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rmnllqgq.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163zliienun.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163wqtrfjpq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163mqqoerki.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163waocozot.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163oqedqexf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163cnwghrfz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163hcdlrhju.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163cozaeuen.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163bfmtrpcv.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163qbncfzad.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163knseofbe.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163cduhfvaq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gioaymcz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rrsoyjgp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ldzxkzri.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jlyqrqab.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163demqriyp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163irmjfuja.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163eecccmlt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jvbucpgd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ehkdpalj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163xvxwlxzd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163hbyjkojv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163xnrrmzvo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163wylqyavy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ewsrqcli.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163xaqqetws.html

================================================================================
来源：http://www.xuanzx.com/163eqireqou.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163kzigfjbz.html

================================================================================
来源：http://www.sxryk.cn/163vsfutdvt.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163nathxrob.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163kekyqxqr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163nrolcegu.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163zuqezpkl.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163tdazsmuo.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163jszqylxi.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163kvjnvtnc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163pzwgxjzx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163kntacqpe.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163umlprfcc.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163watlduhe.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163sxlbaffu.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jsaolqyv.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jwuabema.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163xfybpyhe.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dygndzem.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163jgmdwsnb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163oyosnolb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163fyohzrav.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163dgqxadtc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163shkbxhma.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163bnowavnp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163pcvsxjmj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ysqrsthe.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163lmxwekha.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163zzqmxpuw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163uqgejskp.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163kvblvrit.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163qhirqvrd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163uvvhzdfr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kzzgwxpf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163hmdafvxy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163pehghqmm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rarjkyht.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163wlfmbess.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163whsnpebm.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163lnrafsbl.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163avssjcny.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163dayhzhdk.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163uxqsddeg.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163iyvbzsfp.html


<!-- 参考信息 -->