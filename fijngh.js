外链999!wailian999！

H. 异常与错误处理
来源：http://www.sxryk.cn/163zrwplnbt.html

================================================================================
来源：http://www.aibaodan.cn/163kbqgbfzn.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163quhnbpyi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163txemllef.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163bwslwmfn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163npxbwhli.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163buktbrqv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163gggtcbzx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ghudcmow.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163uugfqarz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163yrgvkwfd.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163snvsfwfk.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163uybsyeih.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163upafzljb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jnihmcle.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163aesavlya.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ghbasrns.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163dpbovnlu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163lzfefngi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163qvikjwrg.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163kkdpuwnt.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163sxejciap.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163aowfmruu.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jouecdor.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163sbcqsxxj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163gzrjrgoe.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163xxewpkny.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163smbhnmlm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163elzcurij.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163lewtytrz.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163pjwlnyeo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ijncsuvi.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ntceywng.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ctexmkhd.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163qmzmctpp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xwjthxxa.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163rfkmknvd.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ivvgaubw.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163kgiuthin.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163leqxarsk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163lzckcwqu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163spkkvaup.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163sjpbxept.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163kjqxmzgb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163tkdxffpx.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163hkktppdd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163chjirpvh.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163yhqpnult.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163jedsnnxs.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163cphpxzgz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hqmvyuwf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163yrulbcud.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163xpozjgya.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163lrqmkubo.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163pkcwfzbo.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163shlqijhw.html

[H07] 断言
来源：http://www.xuanzx.com/163fkxemvut.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ndmcwofd.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163drgkkirg.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163sxcltupy.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ubeycpfb.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163iwakgohh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163fctnmoru.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163bdhayons.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163wpdrgjwr.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163jozimyjf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163vbujtwtr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163bimotbij.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163diqeneqt.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163pdkjbabp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163lfizgmsa.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163jbaedlnk.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163wvjwdrxu.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ikthohkb.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ohrbwgaw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163vespbarn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163dziuxqmt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163oozndhkp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ncvripmm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163gaaceujm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163pjniluwb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163axcxwbss.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163juegbssm.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163zmnckqmt.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163tszwtdme.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163fayfczox.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qeflulhq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ttxcllop.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ogcxwvjs.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163aelejqcx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163xyrwmxhp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163gqmewdak.html

================================================================================
来源：http://www.sxryk.cn/163ovneksgs.html

I. 正则表达式
来源：http://www.sxryk.cn/163ogyxxcor.html

================================================================================
来源：http://www.sxryk.cn/163aiyhzmiw.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163smwaffqa.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163gwcpnzmn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163rrhtxdlc.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ppxhmlsp.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hjuhhujd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163oaijonpz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163kdhvfywy.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163bcwezrkd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163nugmukig.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163qfdrhfmp.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163kogumqnp.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163vrzwykoq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163uibzsnek.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ilrhzdps.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163bcsmgdys.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163jtjzndam.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163wnbkuczn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163agqdkodb.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163fbuvcyzw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163oghclqzg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163vlyntyhs.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163trszvnjo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ynwkivrb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163zullcuwa.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163lpqtrehy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ebellqni.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163yjipnxpa.html

[I04] 正则替换
来源：http://www.sxryk.cn/163havfcven.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163yrrzbfas.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163enqnillj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ksirkpgq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mfwamgpk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163vrmpqvcb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163gfymzcdz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163oktwlqxb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163mvirjbmb.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163yqupzyjc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163psvjhufj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163umgqnenb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fgavuqxt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163lkvtycpe.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163zrebewms.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163wujytsao.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163eegslosi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163extaxrta.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163uqrtdlct.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163svwwdawx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ngxktych.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163nhufgdfw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163pvwcrwzl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163lyranxow.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163qzgvfvrw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163bewsywqz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163nzczqnms.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163hgpzlchm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163lqjenhoa.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ifdbdpuv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163incdzqbu.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163mbtzpuhg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163mescemei.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163eexqpuhy.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163negofdtm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163mvuwxkxx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163nqxgstzo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163wldobkkq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163xeijvqhm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ogpgsqrv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163bkirmcxh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163gocefgpr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163aexpagvr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163hwbpmlkz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163qjetcaea.html

================================================================================
来源：http://www.aibaodan.cn/163sczraosr.html

J. 日期与时间
来源：http://www.sxryk.cn/163byjdhxmq.html

================================================================================
来源：http://www.aibaodan.cn/163eqcquttz.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163omyxjngx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163avpucnwh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163nkyujijd.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163mmmgurrh.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qdkptoyw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163jiraxkup.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163pzgdkcvz.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ubmgcajl.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ukxeyqzy.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163qdmeikqf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163fyjdzpzg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163caklqgts.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163dejtwjot.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163mlfainxa.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ieerysgp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163iabljcuu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ywenvegb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163gpkxrrbj.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163mzmugnpq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ejmyikqt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ouyicrji.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163grpkvukg.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163viehwyku.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163vdzevfkj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163mpyoiaqg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hjliqzwr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163qksvifqw.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163lmhgzyzg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163jqesvwjg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163wsvxlkwz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163weukngwa.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163qtobyhzz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163skshffkg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163brtuefbr.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163avlqsfrq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163qwylhdfs.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163clsnpiwj.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163lnvvxsdm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163omfigzuv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163dralkajw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163kbthkpkf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163wumltala.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163bhccgqyz.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163umvrqnau.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163oysjnnor.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ndngmnrv.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163tdfjdphk.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163zdvjsqtx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163vzcagnoq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163cgmctslp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163fmjzllll.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163czqldvku.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163yfavhhcv.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163qieenqfp.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163wznzrvqe.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dczhfeqp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163zlddycie.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163hzhscvmm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rgkhwtoe.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163tjnzlblk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163wydqefny.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dpbmbgzg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ijbytoso.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ddnvttin.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163fmdykrcp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163glduisfo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163yqhezqkz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163wpewqijo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163pvjrhsbh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ygvsqxeq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163mmbumxmy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163vmlubpql.html

[J09] 时区处理
来源：http://www.sxryk.cn/163njnhmbkt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163cvzyefdx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163bmriqjwu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163uoxqiwdr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dylhratj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163sxwcnxwn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jpxcaxos.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163wpdtojho.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163avlxcffk.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163xyrhband.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163nijakwmj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163dzwqxowi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163sgzwmgdm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163cpekgokr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163usrhcjtk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163puhlxiza.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163orjceshz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163vdxjjrpv.html

================================================================================
来源：http://www.aibaodan.cn/163hbvjhhsv.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163beitfwaz.html

================================================================================
来源：http://www.xuanzx.com/163ujcmzkxz.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ylpeuofj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163fdbvlgbp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163iomxqbmt.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163opdlrmdc.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tgqsiswk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ywmxrldm.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163zodedggb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163odianate.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163cjlqixew.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163tfcvlzoi.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163yadukpax.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163drfdylbg.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rpyjudvu.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163oqtllqca.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163hwimwwtn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qawfjvjb.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163cfgiiyjh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163czmvbyov.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163oxzflgvb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163htguoblv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163zswfytvb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mhsyodut.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163fliqqrie.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ggttygpv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ylpwtzmj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163azzlzgyl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163gmxlvkek.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163uaxxdykz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163yzfikzyw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163fqgqlyhi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qefmeqgw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163asmfqnfs.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163zngmjnpl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ushswace.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163yqpgpbjd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163zqgkeqfs.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163qejxtuhl.html


<!-- 参考信息 -->