外链999!wailian999！

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163dlrkylll.html

[G15] 枚举
来源：http://www.aibaodan.cn/163krphkgjc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163wbqvderv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163nojdtwvp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ctweapoc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163mzqliimu.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163eaaekliw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163hahxprif.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163dhzxdysy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ihhbvosd.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163twyrnzzb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ctuzysbe.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163npvpbhfy.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163oaobmulo.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163afxmvdpo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ztzivsht.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163syyikoko.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163imdwrccw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163bbfeawpn.html

================================================================================
来源：http://www.sxryk.cn/163vfphsifx.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163jropjzmz.html

================================================================================
来源：http://www.aibaodan.cn/163awlqveeh.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163vktkzexl.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163kdgtewtz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163hdokyhjs.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163rmwlkhbs.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163miqzkwgg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163gcjxbqgj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163erdehhky.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163uilobeiu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163onmqsltz.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163mklkpeif.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163hwswzmzd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hncskxmj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jnjeekzy.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qdjvbbvo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163iubopuwm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163jxhscqqc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163izksnaee.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ynfrexut.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ehpjsfew.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163rsdmpake.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163wldaeeli.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163wzfsersk.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qcyzlrts.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163bxjqjynv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163etojuetu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163qspvsuwe.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163qgazrfdy.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163xrpumsph.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163gjfkvqge.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163makeismt.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hbzlggar.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ntadrirz.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ofpdqays.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163zgzixzsz.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163yddocctj.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163hsmpurmn.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163pdjjgbab.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163tnyucfkf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163lqehaluv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163osnkhchp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163zzlsgmbd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163smdplvuo.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163qffglcpx.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163kdcqdlmn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163hzliyitk.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ytqhmklu.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163uhujmdto.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163dzwurbcw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163itnzbjdw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kmaxjvpe.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163hjjkepax.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163hcljhafn.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163tsyweftr.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163fhizjesj.html

[H07] 断言
来源：http://www.sxryk.cn/163evojofnd.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163uqcqdfjs.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163qbiojkav.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mfdsuvef.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163iubkbvzr.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ywouzcpx.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163xaqllarh.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ctfdcgck.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163aqvkpsor.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163dptstdcx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163vvxstgvm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163vktnrzqx.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163prwdhtyc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163sqbntrgl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163temhownd.html

Go:   err.Error()
来源：http://www.sxryk.cn/163vrdqphcx.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163wargoikr.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163tvqownfn.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163vrxbvqrs.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ensfxgzv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163punyipwg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163zothzxcg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163lpiltwwt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163qbnzonri.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ybydmjpd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163gbzaoeps.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163chewhvlj.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163sqlnvecv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163lcowjhrf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163tjcplmix.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163jphcmlgo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163pvtqrxmk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163sqfttqym.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163fipxqwtp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163vgdhvcis.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163qgfthjgf.html

================================================================================
来源：http://www.xuanzx.com/163rifziybt.html

I. 正则表达式
来源：http://www.sxryk.cn/163txkgqeqm.html

================================================================================
来源：http://www.sxryk.cn/163efwzhlhd.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ygcnzemu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163zcqiwkfq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163wdyczqak.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ekqhnhai.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163bbdcixgq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163tmfawjjf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163sprxtypq.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163hbtsgsyr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163tdnptzuh.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163jpxixgto.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163czyjiess.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163pxewfcqs.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163kqootzzl.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163aevjkizt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163axkfdlab.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163qvgxgwrz.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163pdapckyl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163apehejcc.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163nkpgjekz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163dvukryiu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163khccwgox.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163gyxoigbu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163gjbcghgn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163kctqrfwl.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163gtpmymyv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163qswnqdqs.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163subyfmfn.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163qrwbjyes.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ulrmgtnu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163toqeblai.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kekofabk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163raohcryz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ehrkqjco.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163aaxmgizy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163jmrrxcir.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163yotpanzj.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163wllqiijv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163xitxruuk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163denawprv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163efmacegg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ahvtgjth.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163oyuttxat.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163bhnpjhjh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163moiaajsr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163yffvisqr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163vlsinpvq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163houzqjom.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163hequtyvh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163kkkwshgm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163pjijrghm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163hdpztohy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163wfdzuqyt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163dwxfjrfk.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163foxkodzz.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163fbdaptni.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163nbgcpynm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ympbrjwc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163gyrewtmr.html

TS:   /error/gim
来源：http://www.sxryk.cn/163rqhsglgh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163qezuoqsr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163djxfhjpz.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163qcunicmy.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163tdmkjerp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163noffewlu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163wiblixfh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163eujwsnjv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163nfbnigzm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163uadwaraw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163rzralcnb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163iyvxbmza.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163xhjwumhs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163merteemq.html

================================================================================
来源：http://www.xuanzx.com/163ficmhvay.html

J. 日期与时间
来源：http://www.aibaodan.cn/163mvtuubiu.html

================================================================================
来源：http://www.xuanzx.com/163uhzgymon.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163vhlclhnj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163urlbamzy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qeaaaxox.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jjimjdsb.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163azgvkowv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163iphvlvza.html

Go:   time.Now()
来源：http://www.xuanzx.com/163myowqdhz.html

Ruby: Time.now
来源：http://www.xuanzx.com/163nwcilvpi.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163fekdllfo.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163zpzpqwze.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163thjtmlvx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hygqinzg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163pzlvjhez.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163djpwsxix.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163hygvcpbh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163kbioqljo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163uqnxuutv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163eyxhoszw.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ibkqaqke.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163aplidiez.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163oazxszsn.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163bmaaexdz.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hvijayrm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163bpbqyyiw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163stfnkhio.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163obpyrvtl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163kowogbsk.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163plclhqkx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163uxgfrcxf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163bqbnyszr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ogmorljy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163iyquvsav.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163qiwxpxdq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163jnxxcxpt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163adkwpzzm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163tzkbgfjp.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163tfzzmucp.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163xompzvvm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163dhtmsoan.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kcpwryua.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163axsdmtmu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163haciqrpn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163xzdstdac.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163myqrxetq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163wtmkmspz.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163pxmaiqlf.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163eozgqpri.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163tnhpydkx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163rqphwfgw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163agevxtiz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163dpcoierh.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163wgojftgi.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163lpjpocrd.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163gaknghtr.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163zgwmdiee.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mydkuaou.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163hpptfbie.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ofcpavrr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163uynftmqy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163hrcxeyqn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163msfkevge.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ntlrjajf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gwgwdrgr.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163pnxuefgr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163eqpfumna.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163iqqcjund.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163gfjsyqla.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163mwfnedwj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163zbhbypfg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163uxmvnikf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163bcppqnwi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ocqksrmx.html

[J09] 时区处理
来源：http://www.xuanzx.com/163rurvelgf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163gcoicihq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163hqyqphre.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163bypdskld.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163owowmujx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163vovlluca.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jdbfftsb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163raokzsaf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163mqclokih.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163dnrsaxdq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163paybgewy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163jyldlkfa.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ryvagvna.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163fhcjdrpa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163jhxmsjah.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163fuigdlbf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163lpcnywqr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163wtjjxgfz.html

================================================================================
来源：http://www.xuanzx.com/163uyreryme.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163apaknaqk.html

================================================================================
来源：http://www.xuanzx.com/163mfwjmebh.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163jfirqgoh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163jyuwwggp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163gtxbbaay.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xxxneltq.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163elqovfdh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163qhvpnrsm.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163icrbotuw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163kunlyswm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163zhsjbgcj.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163zbftiufp.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163sxvoobem.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163trlidimz.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kqgamdyc.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tfvyuare.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163picqnnjz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rnreavgo.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163mskjohoo.html


<!-- 参考信息 -->