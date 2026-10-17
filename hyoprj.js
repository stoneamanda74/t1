外链999!wailian999！

Ruby: super
来源：http://www.aibaodan.cn/163fcrdfjkn.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163dfmecptp.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163orcfmbew.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163zdylfuuu.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163eyyckjkj.html

JS:   static f() {}
来源：http://www.sxryk.cn/163eumddjrg.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163fweboapl.html

Java: static void f() {}
来源：http://www.xuanzx.com/163uosgltyb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163fhheapok.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163omgektfe.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163tqyqiruo.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163oyrkumoz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163qguzduqq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163scieqxem.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ofjpxntz.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163quxonvww.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ksgkifmh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163aozdcqua.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ccdoiboi.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163vopntkfd.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163bucheitv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163rnflsvho.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163hvqlpazx.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163yxsitows.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163zoiccspo.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163bqzlgsut.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163iwuwzdrm.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163lmlivsxk.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ryxfrjmo.html

[G11] getter / setter
来源：http://www.sxryk.cn/163iwphcjgl.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163qwapmfxp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163cufdkjrd.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163jptnnouj.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163azvvifnc.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163rqnpwqjp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163owjaduuh.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163xgabfujx.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163hfgebvpp.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163lypuywja.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163flfcqhwc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tytzucow.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163dhmfbvyo.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163bvxbsfvv.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163kfbpdlbt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163dtctajkk.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163odocbuwd.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163oapbzotn.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163wgjidmub.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163wdsiyzak.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163sgyretdj.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163dptaglov.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163yzimevnj.html

Java: u instanceof User
来源：http://www.sxryk.cn/163vyhnvyna.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163iaazlygp.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163gncgtrve.html

C#:   u is User
来源：http://www.xuanzx.com/163pdgksyhj.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ublfqueb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163wajjnwbt.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163zefrfuga.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163qkqaqhbp.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163kduysupt.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ggtjynyv.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163yhbvpykg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163yzgsioxb.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163sgkhnopn.html

[G15] 枚举
来源：http://www.xuanzx.com/163pvwxbljz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ddwunetb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163zihupatw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163jxhlwyvy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zpwlbbuy.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163bhhyuein.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163hlvaiaeb.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ebfhtjau.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163geefibcl.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163xqmsuwim.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163tarcdllp.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163jfjhjsll.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163asgszlgs.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wagdaltl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163iwdzwrms.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163lrffofjd.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163miheided.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163vsrlibpe.html

================================================================================
来源：http://www.xuanzx.com/163fbmrnjwh.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163uzhtltno.html

================================================================================
来源：http://www.sxryk.cn/163uhqxmwob.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163yqkprrnp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163avrjuqkp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163dbtkydxu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163gjisirfi.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163pehfqtuh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163hfjurhsf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163crmzkbih.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ilbzwimc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163stiajdwp.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163phzxcqze.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163stibmbat.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dtghhyig.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rknjjcyl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rcclmzdi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qehwgbnk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163thtglxbm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163fzgxfzfw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163elmgydkm.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163xmovdhfb.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163nwlhrrjv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lzcobiqg.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163shsskfrh.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163voxiggqe.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163jlzhksqz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163sirzcyfm.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163nkbnbroz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163wteqfvxp.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163vxqubdkw.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163qhxecgxu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ourqiwfk.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zqmuqwwi.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zyyxstgz.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ykywsftm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163gdwsfdmm.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163nousaesa.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163gmwiilok.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163rrjrbung.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163podwckie.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163bmmhfhqk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xyqfwyzs.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rfspimgm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163bxrnfuph.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163pmjaegbr.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ofbomvoo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163fwmpnjzt.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163uugvvzyt.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163uhvhajrn.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163cyouicon.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pecejfzp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163seedtnps.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163cnbhegkx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163nkauesby.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163gyjkouqj.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163pvvgrljj.html

[H07] 断言
来源：http://www.sxryk.cn/163fvlfrtfp.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163koybbxrz.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163mjjvdmys.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mjisbbif.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wquhysuq.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163gmcfowfv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163jmiywdsv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163opowclje.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163yafpvkyh.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163jdypuvpc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163mukxqsbi.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163gpxdmbbc.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163nnfkfpag.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163pfifgpln.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163wiynisfc.html

Go:   err.Error()
来源：http://www.xuanzx.com/163hhszfptq.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163wlptyeim.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163cmhcekni.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ihbqtgui.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163fpgrtkaw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163udygogfw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163zdushbni.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163omqfnbbh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163bmnxcmyz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163uckvefhk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163uqounjyr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163klezfmwa.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163aleicmkl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163whmdphrq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163jxopazyd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163owbnccby.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hqqrshey.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163efvpnccg.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163qoyhzvkf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163bzpsuyvx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163oszlxrvl.html

================================================================================
来源：http://www.aibaodan.cn/163yfleeprp.html

I. 正则表达式
来源：http://www.sxryk.cn/163uxjpabfo.html

================================================================================
来源：http://www.aibaodan.cn/163affuxasa.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163cmocnosy.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ofdznlwb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163uxlgheqy.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163oheadkoo.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ofnpiuvf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163cnzymdcz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163jfqsjioy.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163rdvtjmvi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163setjiqcp.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163oqtxyiws.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163eabwiwcv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163oppordlb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163eilzarpn.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163oyqqaerg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ujldmqxg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163yloqtjsf.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163grldjhzs.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163uotzthka.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163hiikcsab.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163hiuaytqn.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163qiemyrqc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163wmlopffx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163vopauogx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163hhpqyjxm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163riffugcn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163wszviaoh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163bueazkew.html

[I04] 正则替换
来源：http://www.xuanzx.com/163dawbtcvd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163yntbjuuq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163llcntolf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gnluqleb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ciwmgmob.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163xivcafup.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163diyzoqkl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ppcjtuwk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163djqqcjrw.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ofxvkort.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163iksowsxp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163twqsarcu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163supiwdnj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yxkxoldl.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163azgxdrhk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163mcnodbdn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yjctaloq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ncgwckka.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163uglpvihk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qgxrpczi.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163wrzmswlb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163sgzrdgsz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163felgibbd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163hvwbqxzv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ascnehvf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163tjpjpqlm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163jxqfjfmb.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163eyofjxwe.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163nkfektib.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ixokbsmk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163dtyoisil.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163kvhvplxk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163jfrmqwip.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163xeqonxfj.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163lkbltjvq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163jwxpssuj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163okirazwq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163stkadkff.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163yybywaeo.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163jbwtfhju.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163jjgtsrai.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163uajwxnne.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163xqzaivdq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163mbgdcfkm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ojsotjyy.html

================================================================================
来源：http://www.sxryk.cn/163dmmuxpma.html

J. 日期与时间
来源：http://www.sxryk.cn/163spwsnuul.html

================================================================================
来源：http://www.aibaodan.cn/163zcnukxol.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163tmeilcvy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163mnnhrzsa.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qsgpjmab.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163trhqiugl.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163jzhhtxla.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163kwencbgm.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163jrmnxxma.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163nttofoty.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163qsqnvgfa.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ktxroshi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163dfbevkoa.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163onauljvn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163kcodoebq.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163rluvvbnl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163wlwvrdxw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ufilqzgz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kwgpoijg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163mvvhrmyn.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ucqmrmtp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ndqymcpd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163xyjtolzd.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zuaoyqpc.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ezirvuza.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163nxbxbois.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163tjahmkwk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163tluutkfa.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163aoajmcdi.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163zefntoth.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163xzxnkulj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163qwcoamtz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163hkxvfejf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163hwccxbfz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163nzumiqal.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ocwsurha.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163jdiwpcre.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163lpccjopl.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163coctsbkk.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163wjbywvqa.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163blihmjns.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hgwwuvqq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vssvpjcm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hhafalmt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163yqrexwey.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163vcwdvwtl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163qenxexeg.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163jxgnjlxd.html


<!-- 参考信息 -->