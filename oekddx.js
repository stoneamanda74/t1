外链999!wailian999！

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163movhbtmc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163xixowbrg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163pwacwmui.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163xkthacyj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163memuatgc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163srvcqosw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163hhxsxoyb.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hhjscgay.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163nbgfdtwu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kipbimwg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jpqfsakf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jxejlhis.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kdokisgd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163qhjeubya.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163qswifjbh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163qadsehpm.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163kercbkyy.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163hdwzoxsm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rllujioo.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163pwmcjvmt.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163aucddnhw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163fbftrwvi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163njzbhaqa.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163bqkvtktz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163crtobilt.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163zwmbxinp.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ityftges.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163mbmmsstx.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163znwoakod.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tlnvkfwo.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163eyhukgmr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163qabkybla.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163lembjeao.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163xrvtilnd.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163oyhwtjrh.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163algvibwf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163mvqjcdxc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163bqdomirh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rgwiscla.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163sqxourzz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163mfdufvqb.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163wdgpzzbz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163tucfovix.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163zqeakvcf.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163mfoxubld.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163whmyrnez.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163icdkctif.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163yrciujdl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163zzifueir.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163tnxrhemg.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163bmjrhqsv.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ukfbapck.html

[H07] 断言
来源：http://www.aibaodan.cn/163wizxlkve.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163zifpopfl.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ptwaciyi.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163yloxwfua.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ubowdxbi.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163cfitfbgc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163rrawqnxs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163bzalcgbc.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ypjeidlw.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163imwmcghz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ffqtvzet.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163gpfbwnam.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163lpsaljdn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163kprqrzex.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163qqawvnwr.html

Go:   err.Error()
来源：http://www.sxryk.cn/163hyumcjdn.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163nymexbpo.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163apcqewgt.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163rkgwfexr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163joaawret.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163usergcts.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ourabmaj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163nufgaiao.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163glciqnwc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163gylcxlue.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163rmvjfhst.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163neanttxw.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163wkjxzjyr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163qgzoxqsj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163yghjazsa.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163gmzqskju.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163digkjfio.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163vznfkgua.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163csijlwwu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163bjazugzy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163rvvwzrpt.html

================================================================================
来源：http://www.sxryk.cn/163qsbkepgz.html

I. 正则表达式
来源：http://www.aibaodan.cn/163npknomza.html

================================================================================
来源：http://www.aibaodan.cn/163gpkdvpuj.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163icvoxica.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163zwukgiem.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163jyxqutlt.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163losbnesj.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rhlcafcp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163kclxiffz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163grzqjefg.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163xnmrpstj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163mxxcouvt.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163teyjtwvj.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163aiosnelj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163jwxyjpfp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163rugvgnhg.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ppqkdmcw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163jwkpoyir.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163rudrhppj.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163tlxpmcth.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163arlaltfy.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163pkeywvar.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163feolrmni.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163tlgrqegn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163znyrruur.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163mspkoemb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163oawwynty.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163hzhtttlh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163cwgwznig.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163hurwybcf.html

[I04] 正则替换
来源：http://www.xuanzx.com/163antdkhoy.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163awqfwtim.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163uvvppngq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cjpvzxmv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163xunxcmew.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163pfkifzib.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163eupbbbow.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163rvzgfsjp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163kzzvtpit.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163nopbnhnj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163bprsrrll.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163vsmqihgh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163uiclujgb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cdgonesf.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163dtohpyms.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163frepjnwt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qmpcerhv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163hptmfxku.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163nomsezfv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163icdhkknk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163rgfvgjwc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wqktoidi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163tvahrbdy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163giccsniy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ijwbokna.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163dpvhpzku.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tdwqpvum.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ijjgfasr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163tiyycrny.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163sdxjgtoc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163rjdhvfen.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163cbbetkim.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163dzykyctq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163foxgttzc.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163dmhyvcdj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163iuakfuwh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ildqqeek.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163cymlspxc.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163focntttz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ezerjibx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163uhcggmvj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163cbcbuofa.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163bxdmrwwx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163efsvzwvn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163vcgcaffz.html

================================================================================
来源：http://www.sxryk.cn/163wgjspint.html

J. 日期与时间
来源：http://www.xuanzx.com/163dcylofut.html

================================================================================
来源：http://www.xuanzx.com/163xnyioujm.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163snpyskdi.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163jluupnmb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163xnxeveag.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163pkqmiape.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163azrxrxdl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xhdnfnev.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163nfpsqevy.html

Ruby: Time.now
来源：http://www.sxryk.cn/163kxehhifq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163mhqyssxe.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163xsajebpr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163fsepfkdh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163tycurkjq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163gpevmnbr.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163srmfkknp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163puieeqbv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163gaqudeqs.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163nunudfvh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163yhdadlbm.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163xqpmfymw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163tnutjrdt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163lvlrwqzu.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163forvzloi.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163xajjtnwl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163qybnzlqp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163bebzdemr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163gcaykfte.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ldlnijyh.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163bekwdsqc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163rpyxfrnk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163vmaogxdw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163fxcoxtpq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163vvurkmin.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163rukufcbb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163mrsxlnsu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163zhwqyqwo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163jnlnxros.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163reochtsc.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163qfdfaakh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ptlegpgm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ktxcwqev.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hsfhjtpj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ewydxktt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163izhntqjj.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163dqbowxui.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163gbtrgpbo.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163kcshjszi.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163eqaiwidz.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163xmvqliuv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163avcddrwm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163tspmpqjv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163bsmywbrx.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163zukhrtae.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ockxpigo.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163retgaaoo.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163jexdohca.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nfakhlqh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ggfjycht.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xtwxwwui.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xdjxjroo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163wbugauac.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163illlcbyw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ybrzdzxw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163daycdogh.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163sznktkwk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163zrqiklzu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163wiirvkxc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163hvpkzjnh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163rjhlfugn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163crpttgdc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163fmnzudpm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ayebmlyt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163mecjgifk.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163nfckoulc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163lrxcumbh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163mwpioehe.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163egrhhquh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zjdgqsgf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163hsomusbm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163zbmykgyf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163lvfcajsj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ciinfurq.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163qpikoiha.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163xtsplmfu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163jdfbhzxo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163uscmerll.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163bikxrija.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163oypebegg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163emfoyfwk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163vfuewnmy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163jizlmnog.html

================================================================================
来源：http://www.aibaodan.cn/163wemstyhf.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163epqvkcxt.html

================================================================================
来源：http://www.xuanzx.com/163oykltwhm.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163nonlzkow.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zwznbbzr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163uhpaklss.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zoucukin.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163titjjmnl.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ylymthxs.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163mwxqihqc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163jwyielqa.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163afnaippm.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163tiqwkocr.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163jcvuqgra.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163zvhtcbop.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ouclonhd.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ubrwpyoq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163tqfbcgko.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163wphdyspm.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ivapyfkf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163dlhpbkpr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163twnwnydj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163mrlbqmum.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163yvjhjpww.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ximurnwx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rcnuoklp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ebchkihx.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163qjgcmogr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163njewxusf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163yhqufzuy.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163uzpvqths.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163wktyfrko.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163tswwmfot.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163sealntrn.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163lhlaffwv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163qtcmqneq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nuqouyvc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163lquuymwe.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163dzjibtyi.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163bgagdtfb.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163plxvymoa.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163mvvnhlzo.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163wdswelru.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lssktire.html


<!-- 参考信息 -->