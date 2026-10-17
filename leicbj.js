外链999!wailian999！

Java: u instanceof User
来源：http://www.aibaodan.cn/163yrxlqcdp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163blwqbddk.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163hdlqjmxf.html

C#:   u is User
来源：http://www.xuanzx.com/163cyzxturv.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163llobgjxo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163rzqaapzo.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163qkhpnsrh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ompiftnd.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163hcffgtkr.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ohwqtpeq.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ervlnzsf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163jlzivfdf.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163pnrawcnl.html

[G15] 枚举
来源：http://www.aibaodan.cn/163hzbtcaby.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zipqgzux.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163kdgbkeya.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163tamoxvle.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163otvxnyqz.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163pdxnqswu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163gqglauri.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163fgndykna.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163cqnessxx.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ejkpcvzd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163svwnvbok.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163afhhzjkv.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ftdfmzsi.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hqytnobv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ifgiowmk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163inbepoaj.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163qfpwgxth.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163aosntgcn.html

================================================================================
来源：http://www.sxryk.cn/163evxlouyc.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163bpvmezoc.html

================================================================================
来源：http://www.xuanzx.com/163rggnfjar.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163xkbzggwo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163lcgyuqll.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163drkmrtwq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163zeqkmkwb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163xhwzsrtc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163cgxecftk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163zhtzjqdg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163aizuwszh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163fmcwbvmx.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163xpeyzjae.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163qbjullsz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163agafqivu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fmbrkrsd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163uzrwicaj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pyxjvgex.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163uqlssnvq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163enobkkrh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163dqnkebxp.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163wucnqhra.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ybzqzowr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ykzzghtd.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ccaatlit.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163bchsijbj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163wlumvqyw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163fezhpqau.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163pwiqzaox.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ropsshlu.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163nyelhijx.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163tswpvrps.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163rcafdpjv.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163myjtefqy.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163qmxuvhoe.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163lccbjjsp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163gxxmtxpq.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163sqrrpnrl.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ciizajpf.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163nmxlschn.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163fwflrysw.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163cxlvwdvl.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163nycdacgv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163fpzybwud.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ulujloqo.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163zfmaihjd.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ysmrmwxn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163uwsguvmd.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163smkqqtff.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163uzfcvinq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163elphwlzz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cfpcacpl.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163grzphkzo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163mfbzgedy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163qjmkahqc.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163syvojahl.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163qzskgkhz.html

[H07] 断言
来源：http://www.xuanzx.com/163vkepcozu.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163xmnbsmxg.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163mjwsjysg.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163iympyxxx.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163uwgwixdd.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163bmvtltck.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163fnclywzb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163cocdjvvv.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163gdumpffz.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163kahoposl.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163vkpmvuad.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163xrbteomo.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163onbixveh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163dpqgipku.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163xyarhsvq.html

Go:   err.Error()
来源：http://www.sxryk.cn/163wbsjuxet.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163qvrtateg.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163dphopkwi.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ewijvvot.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163sgegjbnn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163hmshnnka.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163wsuleyky.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163bydxwwyy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163yjkodcty.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163jlvdarzd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ylbdvmxj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163hclnxyhj.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163lvmhhcuo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163dyubxvon.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ucnjumqw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163efewpfcm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cvkizwnh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163zqijfeuu.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ieeczeal.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163wvydumne.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163fziipsru.html

================================================================================
来源：http://www.sxryk.cn/163scqkemmu.html

I. 正则表达式
来源：http://www.aibaodan.cn/163gvabblhp.html

================================================================================
来源：http://www.aibaodan.cn/163oncmamfi.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163diforcjs.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ezqjcsbl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163zcbhyjcd.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163avlmsuvi.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163gikknleq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163yfwlkpop.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163moplbops.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163piqpgfhu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163rqllwari.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163amgxzpyr.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163lmdllasv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163olvbzkrf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163kcvpacjj.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163xapzglkx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ijeeigqd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163hhstnosr.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163lnvfghfp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163cfbwilli.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163bxftzuah.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163amabtmru.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163aclzewxq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163rtsnfhml.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163chxnaeqi.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163dxfvrooa.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163peoiuzus.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163hfxkphhi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163kduvpyne.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163xlommwei.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163yodntdbh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163btfraqse.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fidznazo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163pvzxrbeh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163iaqvwpjp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163jxgmgxvh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163sndvffil.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163brcuczfx.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163xgkymotl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163wkvjoohn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ouujciij.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ruoduyvs.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163npqtzfpu.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163magrhsvy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163wxiqurtg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163breohjpv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163lvenhdrw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163uetjczln.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163robvsowc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163fywgkrdh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163bylkxesn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ujtlwjdk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163wyokgnob.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163plqjfntd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163lymttgvy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ldmatysf.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163mplsleve.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163jnomckby.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163zmpvdbhf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ucfiersi.html

TS:   /error/gim
来源：http://www.sxryk.cn/163uclwqjxj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ugpadywe.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163fhctfhse.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163tfwwiisw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163elbgrfmz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163twsuoroz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163iumzozlp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163skfhwmdc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mchatnwp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jlploxwd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163rmnybmyx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163vqirvtwb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163gtgenoga.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163pdnxledy.html

================================================================================
来源：http://www.sxryk.cn/163ywdomzfq.html

J. 日期与时间
来源：http://www.xuanzx.com/163huygzcjt.html

================================================================================
来源：http://www.xuanzx.com/163sbqfcwsj.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163qjovpusg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163wxluokga.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qqxspumj.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fbsccplr.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zwfdsdtw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163qfcmomyj.html

Go:   time.Now()
来源：http://www.sxryk.cn/163guuztqbo.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163mfvuvdbb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qswnccjn.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163bwwiemjl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163sjbdxxtr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163humordul.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163yhaisyog.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163kizaplco.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163kfgqbfxw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163zfreyrbb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rntesowc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163rcthizil.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163fxufryyp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ahsnwdxq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163fpqfwiyy.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163kvnovnvw.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jrlwfqbs.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163pwfowzgt.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163wantumqp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163taffstxg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163eyilbdsx.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163eeoahpkw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163npfarjac.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ynfwueeo.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163hiolyzak.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163idjgewkt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163klatcurd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163sfgxqlzs.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163sgsnjgqb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ujwhvxir.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163tchwtwfs.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163owihtjjt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163vkonmhun.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ommbqafv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163emeiteho.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ukrpszwx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163mmqjoler.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163thtpreij.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163tuvkbric.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163danefxiv.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163udoyrojz.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163wdnzyxlj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163wozejfpy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163sfruaksn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163jodiccwm.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163owydvrov.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163mdaycvcm.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163eknohnbm.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163iwhcdtcl.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dkegwrjm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163yuigqdkz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nazyytfm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163znadiazm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163gmflhune.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163evziwawl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163edpsgehd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lymyhkkk.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163sfbleknl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163zugnozrr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163tsxcczte.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163uyvjjpfe.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163sqkheakw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163nekpzfgn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163othmtnmg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163llrvktqg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163sdvlgakz.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ybtdcwlf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163oveolmol.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163zscymaqw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163yfvpalaz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163saiksxqt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163yvkhfkhs.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163pvnheoxy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163npcujrty.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ebuopfln.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ixmhhfxv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163wzujijml.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163wjxtroxi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163apnpmzyy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163dcpjuqay.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163wypquvqo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163lkbptlpe.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163yhyodyws.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ubwmviyc.html

================================================================================
来源：http://www.xuanzx.com/163tnzzxqnw.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163mrkyaarg.html

================================================================================
来源：http://www.sxryk.cn/163tdesnmba.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163fvjbophw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163wawlrvec.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ypzklqds.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163zdjkcifl.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mmshfjsq.html


<!-- 参考信息 -->