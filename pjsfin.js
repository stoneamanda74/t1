外链999!wailian999！

JS:   super.greet();
来源：http://www.xuanzx.com/163rdxrwikz.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163txxpfymr.html

Java: super.greet();
来源：http://www.aibaodan.cn/163nvlpbfbn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163aqbobbiz.html

Ruby: super
来源：http://www.aibaodan.cn/163yukdkcrl.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163pfsozptd.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163trnpkprw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ilyawdxs.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ojrvzrlg.html

JS:   static f() {}
来源：http://www.sxryk.cn/163dmsgrxmg.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163otcjthsa.html

Java: static void f() {}
来源：http://www.xuanzx.com/163qahxcnkq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163eksrxrak.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ldqocflc.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163beuixcsa.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163reethazm.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ytdpjoav.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163gwknacko.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163spwidzor.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ubqgdzxj.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163puntjpng.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163smmmkjlf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ahgnlzeb.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163suamjler.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ijtdvjqu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163kgyqpmwi.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163mwonuypl.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163knzyyokr.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163jndbluwf.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163inblvsvn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163zhcxhere.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ueilqkew.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163domqhasr.html

[G11] getter / setter
来源：http://www.xuanzx.com/163eekxhzru.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163rpbgccux.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163runlsmfg.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163keqxvwfy.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163sdhdpmbk.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163umnrixrq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163csyegxdx.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163blkibsim.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163auarpzxs.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163gnltswmn.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163cgmkzode.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ycbagtyu.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163widzpfde.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163jyhwotoq.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163catjtwjn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163kaylkzgw.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163aprsqeju.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163hxcqptju.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163zkssidlz.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163fbqcfokk.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163qciiiema.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163nkbxmqbo.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163lozcblya.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163yqggxnoi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163jxqmixja.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163xqoukxia.html

C#:   u is User
来源：http://www.aibaodan.cn/163btwhrhyp.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163zuncpczz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163yaygiyhj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163npqwsibc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163pxuqosat.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ogkcphtf.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163lciuzdoa.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163cjrqoahh.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163asaegibw.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163irsvydtj.html

[G15] 枚举
来源：http://www.xuanzx.com/163cvhgsiig.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163bybyiwfx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163rxpxgono.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ijmegowg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jiwysmia.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163gvdlbvwd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163mgqtztmr.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ddemswsh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vuzkwyko.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163mtvaczxt.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163sogrduoh.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163dadjehui.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dvrffmvg.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163kwbyyhby.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163itjjmxpn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163jyaxklxa.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163nvnarafn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163eyjfybqo.html

================================================================================
来源：http://www.sxryk.cn/163gsvonqec.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163lthiiqdb.html

================================================================================
来源：http://www.sxryk.cn/163xxkziicv.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163afapmrvk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163emvkbzvr.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163uwypfwdg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163xkatwjeb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163yqknwpbz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163wqpgykim.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163hkxmzwje.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163rwmihfbz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163wbglaumv.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163uqrzxgps.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163clctcbfu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ruqazmpl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163myiddcpv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xhakzdup.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cihvnnsp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163zmbsldch.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163krrejirn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163sxuikyht.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163qhwneswg.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163knguoxsr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163fabwnpwd.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xfuutbui.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ulephkmm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163uhcgrfmu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163vsjtjomb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ayxaayhi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kziglcvp.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163bhejoeli.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163raxhypoh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ccpyceuc.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163bznuqgqd.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163fyyxvwhd.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163bhjurnnf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163qscjlgqg.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163aesybfjo.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163zvxkmdvh.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163aqenivai.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163cjyduleo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163dbbjmuyo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163nbklipmr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163aozrmxgm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163lietczzh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163asjvtjbo.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ntjrplbz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163htenpcfc.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163itkfbaga.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163cpwhfieu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163aheaoxor.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163deqeqhdo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zfpsiluv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ewuiwbje.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163yzgqmhsc.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163kkwqirvc.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163wszwaitu.html

[H07] 断言
来源：http://www.xuanzx.com/163sqjxffuq.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163mjnzvxcz.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163tcuofedh.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163rzbarzta.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163pmpshpah.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163dokvgtih.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ufihkvyv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163godrxzem.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163jemeavka.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163kdwehilp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163aheyrglb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ojyntjkp.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163niulcgyp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163hxupmngk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163gloltvma.html

Go:   err.Error()
来源：http://www.sxryk.cn/163tdjcqemv.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163eyplqizc.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163fszmgsnc.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163nonolneo.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163wnnqduse.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163sqealwdl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163dlabngqz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163yxppmfaf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163trpxgoqf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163mwcdrmdy.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163xruivtyx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163akglqaak.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163bomcwdae.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163rqlqdjgg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163phqpzfnw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163oqlewbwy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kzyogrsg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163claknqoy.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163josxakah.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163acbndsda.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163vsgyvtyo.html

================================================================================
来源：http://www.sxryk.cn/163pwagapem.html

I. 正则表达式
来源：http://www.sxryk.cn/163auqqnfcx.html

================================================================================
来源：http://www.xuanzx.com/163zpjyzvxe.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163zthgrgys.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163hbzamnuh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163xazebdoq.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hlvcohoo.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163phxdixfw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163xcjfwifv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163hqsgzzis.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163hibriakx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163kgsjbzaq.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163bzlnqpga.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163xkwxajjl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163qoinoyfq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163khziuwyk.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163hggogdmm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163lprtvslq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163dybdykjs.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ghawdllt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163herpabjc.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163agefnrtv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163isohdwjq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163zzpimdps.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163xomtsxqg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163hxizxevi.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ksbpijts.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163djhmbaxy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ewjjdmpf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163vccpakaw.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ztgysxrc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163giuckrki.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163wrbrmizv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ltjlkepv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dnuplowk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163sklrssed.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163hrjhfwyx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163zjaxwdlh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163miznwmal.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163orlrtron.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163zueqsjny.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163wuukdoib.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dwcusxcc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163suooygyt.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163cixfghix.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163sbtujnck.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163oefnqkef.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163sdcdeqjd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163dphzwiwf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163jbonfkjb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163flvnlevx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163egkqkcml.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163uvyketdq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163pzyfhbxw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163wusrfajg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ayoxkolo.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163yabjalsh.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163iulkzmyh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163dizdjeoz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ttddrtql.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163cvbmmfhu.html

TS:   /error/gim
来源：http://www.xuanzx.com/163dwwcxlhq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163pvpnlawg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163aouvqefa.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163gincclmh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163cnxprdsd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163dqaucccb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163evuckkfz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163evlylhbx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163sstmajas.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163chlssyms.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163lvpqulxo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163kmzrbisw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163bnfzaxdh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163lqlbvcrx.html

================================================================================
来源：http://www.sxryk.cn/163yauckejp.html

J. 日期与时间
来源：http://www.xuanzx.com/163ltmhbfkz.html

================================================================================
来源：http://www.aibaodan.cn/163qmwxxdro.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163eqirfmag.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163piqvrqqy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163zeonummj.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163gfkcnbmm.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163cjsvyjcy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163bpwwclpt.html

Go:   time.Now()
来源：http://www.sxryk.cn/163irerrtlr.html

Ruby: Time.now
来源：http://www.sxryk.cn/163rwhrzjet.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163xmdidyjv.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163rojgsqpt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163cnanlfsu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163idhlqtrp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163dkeghhgi.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163amjvcfoe.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163uqrdxyix.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163yarnqpyr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163dnowcnun.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163qvkqziwe.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163qcqtpvpg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163tmcbbybv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163etrczmab.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ibdjjqjc.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ydmknpug.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163lglhtlqv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ulwltdig.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163vqpvjkgv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163okmdqjgh.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163szhspltx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163vgcdyklc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163tkdmybai.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163vnbezrec.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163baqljewr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163btgfmrgb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163aiuymjqs.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163cjdksunh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163dinnruqb.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ahhthpeq.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163felxkkji.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163camqvhuq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rromktfq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163usgatxkz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163mzeutcpb.html


<!-- 参考信息 -->