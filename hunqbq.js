外链999!wailian999！

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ehffwmye.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163jdcusbqu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163cqxaxufu.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163jdlmtkvc.html

[G10] 访问控制
来源：http://www.sxryk.cn/163dfyiszlo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ndfiqrnf.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163szozcbvj.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163opjajirx.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163jyuvfvzy.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163oowrstsv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ifhsfmqu.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163hpvogkza.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163qslxytmv.html

[G11] getter / setter
来源：http://www.xuanzx.com/163vcvqhakh.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ybbmajjj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163armuwhyk.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163zugflcbp.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163khrqkofi.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ydqomrhf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ukzmgwpy.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163tedsgfsn.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163snqrsbxe.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163kyhmjyzm.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163tuavjusu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163pptkqusi.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163vkdhvrhc.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ekmjnfai.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163mpvfggry.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163emqysmnj.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163wtnozxny.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163wdlzvjtb.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163uzedymug.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163lxamcgsu.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163wdhvjbnu.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163pqfyfaob.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163mscqnoyg.html

Java: u instanceof User
来源：http://www.sxryk.cn/163dwmxfmhz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163webnhqpg.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163zuhmsmid.html

C#:   u is User
来源：http://www.sxryk.cn/163biymjjjs.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163wcexumyz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163uwxfdpvp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163klwhrusj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163pikidqnk.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163rdsfkdal.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163uxoawrxp.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163uesjgjlt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163tkvcqqkk.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163qwluuflg.html

[G15] 枚举
来源：http://www.sxryk.cn/163dnpjdtzh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163duhibmiu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163wcszemyg.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163osuscvii.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xyxjuoud.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163rmckusdm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163svmdxzpf.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163sdcazzxa.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163aqldtezp.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163hroncjas.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163sgvhclkm.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163llmbkrfo.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jkgeonwa.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ddpjggkj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163fbepujkx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163pczvsdwu.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163fzppzmqs.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163wmqzoqga.html

================================================================================
来源：http://www.xuanzx.com/163jixwrcba.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163yohgimel.html

================================================================================
来源：http://www.aibaodan.cn/163iqucwvci.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163zyzqszwt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163obnighlo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163cawhsabd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163bdtfdexh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fpepylmt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ckpuxzel.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163vwqdvoyv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163bdwffifi.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163xacpjkmo.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163zhrujhrk.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163hognxyrk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cmuctvrw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163chhkugur.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lqdpgipx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kkwwnbnd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163mahcikpz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163yetjjwpt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163jtiyqcag.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163yeroyrdc.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163cnmomiaz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163qjlbugzu.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163bsgbsjsf.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163amlvwirf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163lgvutapf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163mtdyzccw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163dzywbyql.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163qtvqvomn.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163wqdqzham.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163qizqvqta.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163pidjcxyf.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dtipxhpl.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ydauykoc.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163tmbaowpa.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163cqsqvwiy.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163hdlnxaoe.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163mcjbvofn.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163izybhdqi.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163vxafhbzx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163vioechom.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dsobegwm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163fqfbmnjl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163dpslmrik.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163hwrpvkqq.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163rxiezzkh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163gshvamee.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163egrltssq.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163hplehotk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163hccwpwla.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163rywvpqlh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zbwbewql.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163tnptoiqe.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163mgdygrqh.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ixtljnfz.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163bxdkbqrt.html

[H07] 断言
来源：http://www.sxryk.cn/163alkghwpk.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163gkbhtiyb.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163jqnolbct.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wognqucw.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163slziepce.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163rhreyihb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163imclwytm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163jnfywygk.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163wommaweu.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163cxbjmwcz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163zaalvsbf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ylayzthb.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163pprkshke.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163vnxklcuy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163vnejlbkv.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163nyrfpnms.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163jhpixuqo.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163fybtlako.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163tgabkgie.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163sesbiltn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163njojgkdh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163nqaayzcr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wjwxdfwa.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ovkvncsd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163cdijneou.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163bfbnahqa.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163pxqencbp.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163yjossfxt.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163bwmkfjsb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ygfcwnmm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dbtcpsgi.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163uqzgellv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163snctnmiz.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ghpvdeyo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163aflymqrl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163dfxkxfon.html

================================================================================
来源：http://www.xuanzx.com/163kwicwliw.html

I. 正则表达式
来源：http://www.sxryk.cn/163vjdvxinv.html

================================================================================
来源：http://www.sxryk.cn/163zpcyexcs.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163knqezadn.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163vfykstwv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163uumsbxbw.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163jozsyjgl.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dnadiknb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163kwhiqtal.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163agfbfqtp.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ncuojzse.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163lnconxgl.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ezzobkxj.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163okzddluo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163kopposve.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163tkztlvle.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163iwytetiv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ynprrkus.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163rhhmnimn.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ushllmtj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163igasiosl.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163meywynhl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163yvmrmpwv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163shzktsyp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163cbzassay.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163vlhpjqer.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163qbmkxtyc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163omyxwyju.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163yhdtjijg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163draaazaq.html

[I04] 正则替换
来源：http://www.xuanzx.com/163nkklgppz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ivohaqdo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ejyilgid.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163glatiyfb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163iqdmemyr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163jzknmwfc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163senymtsz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163vczvszai.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163myhyywfs.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163vfvmiqab.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163sxpuoqdz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163mqrhqyil.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rqkjgeui.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qsnmwsbr.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163jdbmdcod.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163rgaaeyxj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gmghetna.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163wnqhxjht.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163qysssxht.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ytwrorrt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163sqdfkxgm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163yihozqek.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163drvrlncr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163vhxubbis.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163cjcstoud.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163drxkcgjl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bicxwbxr.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163cytushik.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163yppruznw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163pvivepwx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163zojhobxx.html

TS:   /error/gim
来源：http://www.xuanzx.com/163jttnwlzh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163mditfxgp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163lxmzdaio.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163wlqxayli.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163afcrphoo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163lbotwgqc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163clsglvig.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163wyezjrbr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hubjtfqs.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163azplulxa.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163qnanitoo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163srjzalrj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163yxquaujs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163cwfigmos.html

================================================================================
来源：http://www.sxryk.cn/163kdpencmv.html

J. 日期与时间
来源：http://www.xuanzx.com/163xsbzafck.html

================================================================================
来源：http://www.sxryk.cn/163hagczvym.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163zluakass.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163flnnaqzr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163vnvrmbuj.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163vsgdnblb.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wibizpfg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163tdohurlb.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163iburnbcz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163uilsnryf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163isqxyjff.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ofbjetrj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163pjxemlpa.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163fqgwmtdv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163oxhjxvvq.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163skdygnxl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163qzenbbaw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163vpoyrbpe.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163cjcozlbj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163pjynnyyr.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163gnhxxrec.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163oenltvjw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163gerytosi.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163opneitef.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163xenbpnco.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163thsqdaor.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163kabrwilf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163aztoypfz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163hciawuup.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163tgyeiagh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163tirigxkr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163qxmcllxs.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163mqsmsaik.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163vkpnlrri.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163trbpllkf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163fhvibdjo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ikwkpwhl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163dgtrwvcg.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163bjgibtto.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163uxtzdyfe.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163npxwcega.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ojedhcvr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163eradovvb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163wgsvkcoh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163qrzsdxnv.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163khmhqbww.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163wgmwkobm.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163bnmukaji.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163rbyypgqk.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163zzxhuyty.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163astzwuuj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163dchykkwn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163lqasixfj.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163qjdlrhea.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163iksptscj.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163cipddepa.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163lcrnwqvs.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qxncrnjd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163xflyerbk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wiidjakx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163aztnoubh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163vnmfloma.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163rnasmuro.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163puwldurd.html


<!-- 参考信息 -->