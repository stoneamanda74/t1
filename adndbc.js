外链999!wailian999！

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163apzdmjrs.html

JS:   static f() {}
来源：http://www.sxryk.cn/163liywipfb.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163pepiffji.html

Java: static void f() {}
来源：http://www.xuanzx.com/163cuszzrki.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163oxbzfyjr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ddjrfhhe.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163aeiqjazr.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163xdlrjasp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163atabggdm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163zdobiyka.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ltdrquqf.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163vmxxqfwb.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163tmqagiph.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163rzultneu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ijdwnbex.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163tloytklp.html

[G10] 访问控制
来源：http://www.xuanzx.com/163qvdlnnoz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163lwvpngrl.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163bibdyjju.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163nycploqg.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163minfxipf.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ctirsbte.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163axlgtfim.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163eesizudi.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163rzgkgvmg.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163efwskjmg.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163cbcykveo.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qenvdhzx.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163onkgtnfc.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163efdqkcwe.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ehacnygd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163cjjfrzav.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163gmwhmtmj.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163lqqcwdtz.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ezlcgrvo.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163cfnqtfek.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163pejnunef.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163efxgpkya.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163vdykjilz.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ykqqoelb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ctdyhmkj.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163pyakqpob.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163uvzznfpd.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163xgzpjizl.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163vuhpztyz.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163hvmabciq.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163dxjudrym.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163dgwcpzzb.html

Java: u instanceof User
来源：http://www.sxryk.cn/163elpdninq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ittgmrvq.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163xymirpuv.html

C#:   u is User
来源：http://www.aibaodan.cn/163gczioorp.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163wukkmcip.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163acggjqhr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163nsprqcee.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163jicqujji.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163icafyryg.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163vcgogedv.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163vtyrcicm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163achahqpf.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163lqjnxpyd.html

[G15] 枚举
来源：http://www.aibaodan.cn/163stgzbkkr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ffvkgshi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163sfzgwykl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163hjdevliw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wbkfscql.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163jzkvrxfw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163bbnkjlpy.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163psbsqarh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163bkqshdrw.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163lamqnaxx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163izxqkgux.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163cticrelf.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ilpryfur.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gbdctcpw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163suqqwscx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ipgdjclp.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163rsmoiqjw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163qwelrekf.html

================================================================================
来源：http://www.aibaodan.cn/163wtvrcerx.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163begrygca.html

================================================================================
来源：http://www.xuanzx.com/163uqbfyroe.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163qachlcfa.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163mgcxdbzr.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163govlpynd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163iusvbyiz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163itlzqpap.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163gsnsnbcl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ojeogxqh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163axhfpzcg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163yfifdhep.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163digvgnzy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ynjwhqao.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nlzbqaoy.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vdzwxtno.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wlgzgnro.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163owqwegvb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163hxamedhg.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163rwoxsfem.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163sqpigreg.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163wwpkwsro.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163igmxosjp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163qifcrswd.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163sxherybh.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163kmbgwolw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163aototlqe.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163tbwobwtq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163mqrakiao.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163orpvogal.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163wjjgxwxk.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163cpvdmclm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ocutibcs.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wpydxmnk.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qcpfnwng.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163qutlcixz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163kopntnqe.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163pevstahq.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ucrquppj.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163fgzvmnll.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163phfqgljx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ifphdvbr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ylccfiqr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xaxusses.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163eoasklni.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163rriyntil.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163hqzfjole.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163dhqlrlfa.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ahlhmeso.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163oytkilfn.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163gthnngpi.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163uncbwlxq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hmpoiwgd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ukfwsnzj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163wlrxnnft.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163oabkehmx.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ygwwxice.html

[H07] 断言
来源：http://www.xuanzx.com/163tkjdtcoj.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163jejvbtes.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163yqefagfj.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zuepfdzi.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163gkafkvhu.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163tqfuobtb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ullkuoer.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163irsndyln.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163dyvcifjh.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163dorrlksz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163uswgnbdr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163lsynotzc.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ghgystvl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163vkayrbdq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163wboytxtu.html

Go:   err.Error()
来源：http://www.xuanzx.com/163cqlcmvuu.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163httixqwj.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ubycmfbq.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163wlrfbkuh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ubcyxrdu.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163zinohbip.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163qaqkobvi.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163lhdquefl.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163soptvzye.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163igolzaav.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ykxenbxc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163bvmtsuqr.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163vxquafar.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163niiezzif.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163teocpeic.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163scxlwioc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163rnbqvtdz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163lnnlcfsn.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163jlclwovd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163csuxxmta.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163mkuetixq.html

================================================================================
来源：http://www.sxryk.cn/163evbktkmy.html

I. 正则表达式
来源：http://www.sxryk.cn/163ojpifvzm.html

================================================================================
来源：http://www.aibaodan.cn/163hmbqpuzz.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163pserakvi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163wvvyxqmd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163hmkruwib.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163becarzya.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163asalkout.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163altkoenr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163cxrcjjmu.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163yqhekree.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163oekndtfv.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163hupihwrt.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163gdkyxazb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163mebnauei.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163zyjjlkqc.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163drqcjseq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163jqyvqifv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163bzdqpkbr.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163gzafzhus.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163gvyyyvlh.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163mocvoyjm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163laytuwws.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163tmvczwdb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163efsadrjl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163bxumvnbm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163hzwjjeyo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163oxrfizoz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163vdxtecjx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ppzrbboi.html

[I04] 正则替换
来源：http://www.xuanzx.com/163igieqrjq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ayetuzfl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163pvgsrfqk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163eahnoifi.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163gfbspijn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163daimicxt.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163vqnvnsto.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163bgvztuke.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163jyzmnkjs.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163vbigfkjp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163zcikbmap.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163lxujiann.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hrusdaii.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xwlvqdvh.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163jnbanhfs.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163lurnlnwc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zyedodkg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163euwzjljy.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163gixaamuv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163frjjceju.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163cemyxham.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163lxqjcsct.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ilsmextw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163wiaeqspx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163yphghksz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163pgpvzzad.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163vhepxmmu.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163wzjkndac.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163xfwjiwee.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163sykuyvor.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163qjaoqtva.html

TS:   /error/gim
来源：http://www.sxryk.cn/163qhasdojp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163zeuqfrka.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163gkahuify.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163orihndvy.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163lejfyvkw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163suwaqzrx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163zxibbpnz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163kskuxugt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163svxmszou.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hfjdwokl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163kwlxvkti.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163hvlrhaqi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163nijieeim.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163pkuljhic.html

================================================================================
来源：http://www.sxryk.cn/163rfhdhcwu.html

J. 日期与时间
来源：http://www.xuanzx.com/163ilvuabba.html

================================================================================
来源：http://www.sxryk.cn/163abezrfam.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163jwgxhopw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163rnfdfbph.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163dlbyozob.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ldnrhapp.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163lczfbjnq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163fyrvoqbi.html

Go:   time.Now()
来源：http://www.xuanzx.com/163qnharclr.html

Ruby: Time.now
来源：http://www.xuanzx.com/163kcpxsznh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163knklbdda.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163llgyuneb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hmoqftil.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163uqxqezgf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163kwrtvtft.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163dyybvyql.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163nfsapegn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ymwwlttr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163igeaeydd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163heomwhth.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163qfwbinmq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163nddhjhwa.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163oktkvbdh.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wgytmomc.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163sveiouef.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163regyjxnp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163szmatlzu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xmggldxo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163uvbpabkh.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163sixizyss.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163puagovbi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163tsqhuyuj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163tsqfispt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163gndxgxbo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163srsrjyfk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163wdfeihdp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163bfeciurd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163cvkpbrzf.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163vjxzabfo.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163flnxidho.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163losdgenb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rpbffqst.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163idezlkgj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163iescksbg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163jlhxhlqb.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163iglsujjv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163vdnihitp.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163fgzrmjnm.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163lzkoczez.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163hhlapgdh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163lqbzkonp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163rzhzwssm.html


<!-- 参考信息 -->