外链999!wailian999！

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163knhtggcc.html

JS:   static f() {}
来源：http://www.sxryk.cn/163uuxgewys.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163qckoajby.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ddupirob.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163tebshsog.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ncsmzwdr.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163mnqbjcpp.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163tknvgrgb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163wgyhslyd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ixpdqfpp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163wjhasnkk.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163wnqquaum.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163elkaauix.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163irtprnpg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163lflghwrj.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163mhynurup.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163mwhwizcd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163zescqbkl.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163pbgfzdnc.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163rxqfzogg.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163vyozvwjz.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163qonsxfjm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163hcirbsmf.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163tdwlbens.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163wnijiilw.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163rfeixjyp.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163qopiftkv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163qydlyvkf.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163fneuogtv.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163hxiltszk.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163hlzzvkvv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163vjwsotkv.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163danofgdv.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ydoaszfd.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163dmsvyhhm.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163cptzpjsm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163lvomiwun.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163zdbbhiwb.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163mjwdkclz.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ahafovep.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163elxxggbe.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163opnnkgpn.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163umdagltz.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ykuvgqkx.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163aygkkuso.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163mnapybkb.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163xtdsdeon.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163khwrzryp.html

Java: u instanceof User
来源：http://www.xuanzx.com/163zgtglsne.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163jnlwagzp.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163xupugtnf.html

C#:   u is User
来源：http://www.sxryk.cn/163fofdamzy.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163oeumvfuw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163araoeefq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163znwuzaqo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163owqcstzz.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163mmwdqvik.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163cmvndjca.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163rauesbdd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163qpvqlyoj.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163tmreikag.html

[G15] 枚举
来源：http://www.xuanzx.com/163ngkolhps.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163cjchjfkz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163eaodqqhn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163zsxcmfjq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163whgwvozj.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ujbixjgf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163affqhdpt.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163wsotdyvx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163rbrfkant.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163boamvkjf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163mgeakmej.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163cixomflj.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wjzarcgr.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ozjwkwqa.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163pfvxmivy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163gbbdzvtw.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163dwplwyyf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163dpmoxwkb.html

================================================================================
来源：http://www.sxryk.cn/163vkzhxgws.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163tgthkhvy.html

================================================================================
来源：http://www.xuanzx.com/163rpsrnxan.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163tpombbft.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163bojhqwfu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163vzgvdgqs.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163hbbwtcqj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163cmmceopb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163xxjfezia.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163hsaeuolv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163jkjrqtyk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163nrfmnvgh.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163uararbpe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ulrxzahf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bavxhoku.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uouoezkx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ehiiffsc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ggkcuqov.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163unfxwfkl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163hfcxglki.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163wnsxwzsc.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163owscsquh.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163xajsxlpz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163teymdeff.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vlzrdlpp.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qshsiyct.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163uskrpfhf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ulajdngf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163imsuhqmb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163iqzniuth.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163pooszzhe.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163znuajljc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163kvyywlmo.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163nyjkjgii.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qbyzxqog.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163lmpyonip.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163zgmfqnxi.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163xgeyxzfw.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163vvjtsped.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163otologbx.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163auvkqzcv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ranpqmav.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wutoanfo.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163egycraxc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163fmdhfsuq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163jjunnkwz.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163dmytbimj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163rqtqnnro.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ljntfgbb.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163seysmllx.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163xnwpsjol.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163bzbwfsli.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zfisylcf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163jzolexxn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163sjhhgmwp.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163tnmpwtaf.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163wqekncny.html

[H07] 断言
来源：http://www.xuanzx.com/163gqehzjim.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163hvscdlol.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163jntszsvk.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163owrtflyg.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163klnebslt.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163vzssprse.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163pkqoflgs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163eruafgeu.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163caemoahr.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163vycfelum.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163vkzlwupu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163atiiqtrg.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163jpmuecvx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163kwzinkfs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163vgnaclkj.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163pjgrmzyk.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163zrtwniky.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163lvjwuenu.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163vetlgzxi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163qibtsfwd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163mpjmtxry.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163mrkjreuw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163lkczjyqq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163cjixjixi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163wvtbkwwy.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163rslctgcu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ckyplejr.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163vykxsbjh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163scbipupt.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163zpxrbslj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163pkscsnfu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hfauchjj.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163iufgrztj.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163vfmswhnu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163dowzbinc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163suecpwuw.html

================================================================================
来源：http://www.sxryk.cn/163ctilvrxk.html

I. 正则表达式
来源：http://www.sxryk.cn/163hbvhddtn.html

================================================================================
来源：http://www.aibaodan.cn/163cywcegmj.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163bacorhil.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163yvlozhym.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163rpzbkhbq.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jaufrnga.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vocujpjh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163glzlnkme.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ogwlgvjm.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163amibevzb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ayncbbph.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163mjdoiebz.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163hgkchuzz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163rpodvdhp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163gshcmthk.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163znwahfzk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163dcymewlu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163sidbrzyq.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163xrxnpzsd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163cprndcfe.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163kinbtelf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163spgouabg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ctcjvmmu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163twhqyykc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163sftewatu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163detwttlc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163zmkkdzyq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163qsibgmbo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163zbwnbmar.html

[I04] 正则替换
来源：http://www.sxryk.cn/163xxsadznz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163twipmwak.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163xiikvgts.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163iuzxjlmp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163hrihvnig.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163dnehlrfk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163cfxcivbw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163wblibqxi.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163mntrrsuc.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163wfxbigqv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163kavwdyaa.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163cwuxpsqr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jrvcrhqv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163otntbyec.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163krzniten.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163kojcfpvg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163fhsfqvme.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ihbitpss.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ezcfegsq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163optnwxon.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163pddswzpa.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163cqjzcyts.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163chtlwrgp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163sypaelnk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163apsfhapo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163iavtqhab.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163domezgcv.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163sdhaidhp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ntkdccrg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163leogmvrz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163xzrroawg.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163efzcview.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163hcvguvrp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163cnjkhcbz.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163lgmzwjwd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163spwzodov.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163avuzvfve.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163fkujcezy.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163zppywkut.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163mosmgaal.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hiqhiory.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163bqkrnltz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163vdaccmej.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163aercyaoi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163leypmtdc.html

================================================================================
来源：http://www.xuanzx.com/163wqcjpjyd.html

J. 日期与时间
来源：http://www.sxryk.cn/163qvqkarqk.html

================================================================================
来源：http://www.aibaodan.cn/163cvbqejox.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163pespfvxp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163yaiqleos.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163afjgdrew.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dfmyyrsv.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qhorqswc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163svnqapcq.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163zbgqmsbv.html

Ruby: Time.now
来源：http://www.sxryk.cn/163fqioxhnf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163yrdoeuva.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163nnvroyyn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163sxqczxvr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163hzivetvc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163nioblecc.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163nofjfolb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163vruuwznr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ruhbzdsc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163uyvhjrat.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163jyypvvph.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ygtrxifo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163jkxghwrb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163kgfhfdix.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163oafihxzn.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hbgzeude.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163nxtuuweo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163uawxtpku.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163tdkdvomb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163tuvvanvs.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163sjyhhtki.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163cocenixz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163daopyypl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163xagucjjw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163fuxjiwfs.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163jwcbmspn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163qtxuuhon.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163rjylcpjs.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163mbmndzns.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163bemnmxxn.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163lspccgpc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163hgbdlnqt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ksqhnlrt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vvcrkgye.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163hxtmjuum.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163eygnkbdi.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163dbnvpsoi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163rdmqlsar.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163nhhocgcq.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163mzklnccw.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ftemnyup.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163jfzdbrjy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163wrzecyjc.html


<!-- 参考信息 -->