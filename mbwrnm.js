外链999!wailian999！

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163qpsongku.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163sorusxmn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ozlhzcbk.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163nhkfaikh.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163iayliwpm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163tnldmjcx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163kvshhyjs.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163qonwyare.html

[G10] 访问控制
来源：http://www.xuanzx.com/163akbuggkn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163hsjbbzpr.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163yfsmzgkm.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163fpfypxzg.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163gxmgyadx.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163abjqjuyk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163nrhrygwg.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163kqkphfuy.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163azwgtdnq.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163jjphhnwp.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163nouocije.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ctpesgef.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163leybefrl.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ctorjidz.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163xjdsgfas.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163licbethm.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163sivpivzl.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163svzqsyye.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163naegmhue.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163tslthcrf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wkntgpqn.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163txtyvocv.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163utxqgcfv.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163egtdfbyt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163bwkblgtd.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ransjngt.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163qvkmgiwp.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163tpgegnob.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163cqueqfss.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163nmykezxh.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ttgydoaj.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163cwzesxuo.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163uuvhiirb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ktaqshwi.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163kjmmkpin.html

C#:   u is User
来源：http://www.xuanzx.com/163newhssge.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163reruseqk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163dapkaxmk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163werhpowe.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163yfopzaws.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ullaftkj.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ncfzgrzf.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163zavhdcxb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163pwkkaska.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163mszglohh.html

[G15] 枚举
来源：http://www.sxryk.cn/163wvnmheue.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163zbxlqghl.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ebveezwi.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163kglbqbbu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163irfpkcds.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163viqlvwdw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ttcbyavd.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163nvgrgxpw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163qbdabhbx.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163lnidfvcc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163gchehufc.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ihnszyyh.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163emykhool.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163pekmucyc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163qrbbktjb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163dyenilft.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163vmtmimmz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163gtsprplr.html

================================================================================
来源：http://www.xuanzx.com/163nmejhqip.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163qaokbnzy.html

================================================================================
来源：http://www.sxryk.cn/163fjienlti.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163tpwomreg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163mcuhjcza.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ecnjconb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163desckzyd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163gvpiwmtx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163yphtxtvr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163fogqnwwf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163vaydzvwf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163yxwzjvsy.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163pfeacnzy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163nuoghhke.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eovonsii.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vcaeacxb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163niktmdro.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ovhyaxgi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163zpaobabk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jsgjfwux.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163fudbccww.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163jkytbtxf.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163kpsdcllf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163cqouzgip.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163esvdpnqo.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xuyfdpkq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163csjqsrtv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163tnsxhgkj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163vsltiqso.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163cemojpdn.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163cxvoqzmu.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163eejyewmy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163wxsiopdz.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163thicgrqb.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163apjsguaf.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163wpsmemsb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163oqvkzkcb.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ufpdwetb.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163lyesseoj.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163zkrcicig.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163yrqdqaur.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163spviyibm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163msmlmcvn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gwwtkodv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163uxfsjxtl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163wxhqurco.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163njrzirma.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163bbsyycjh.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163qbzqcltu.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163rajxqebd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163dznqwygi.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ilpcaawa.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163sutaqovc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163nfvdgtmf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163aoltshpi.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163lcazggde.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163rxjxbkrp.html

[H07] 断言
来源：http://www.xuanzx.com/163llzjapdr.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163tuxttgjk.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163dyeptiqj.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jnfvjagl.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163kbkkokxq.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163yreejdxz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163yackspgg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163crjmzazp.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163heddruyz.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ncphhsug.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163cgcfwyif.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163yvxktdqj.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163xwgazsph.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163qycqafim.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163hgpwrkyk.html

Go:   err.Error()
来源：http://www.sxryk.cn/163hmlwevxw.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163nwhbjnaf.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163pclvvqfh.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163bbusvusl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163tqpafrrp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163dhvcbzht.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163gintpteh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163bwpxlurj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163gfzvcctm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163qqflqomv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163rqiosbvy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163wowsueya.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163jtszrnlf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163smyntgfa.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163rzhbuhbx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dkwifadm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rvglomkf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163sxqnaxtg.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163rskigdng.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163idymffsi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ottmapxn.html

================================================================================
来源：http://www.sxryk.cn/163lyhtblyg.html

I. 正则表达式
来源：http://www.sxryk.cn/163uklrlqmj.html

================================================================================
来源：http://www.sxryk.cn/163likbttqh.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ohjestxq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163xkmgdmia.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163lbbytrxp.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163aecjkhfl.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bugxqwvp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163upfvultb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163kvxaylcy.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163xnvizqke.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163qtezgzom.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163gbsnkexg.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163vlitauzs.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163gpdxpxve.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163mkakxwdl.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ksjxyhti.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163qssgbhkd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163xqqtwzab.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163thlydkzo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163zgcqrqkv.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163xtvfbewr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163lcglbjny.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163rswjjerf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ulnicjfj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163tfwpmzkz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163tlpagceo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ksglcakb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163npvzetdf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ntgompun.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163lvgwaxbd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163mexnscbn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163oihrmnyk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cudscqmc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fplnvodx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163npkauyof.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163iisupdub.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163uwdhxgew.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163dxselcpl.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ztencupp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163dhxzfbkl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163wgchmwkb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163sanbgoyx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ikreqriw.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163jssidovu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163vsbywksx.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pwvjxugi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163zgfmfhfs.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163xszagikp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163fkvhpsrp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163kcnauadh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163idcdsbcc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163axhbxyds.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163dezydgaa.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163hyecgasz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ysoxrnnf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ncqwhocu.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163otogfgbc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163fhmnhvev.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ogfkrlzs.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163hpomzomr.html

TS:   /error/gim
来源：http://www.sxryk.cn/163aiwvqhjj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163uxvkhbkg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163zlpgkwlq.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163pbmvseez.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163vfjswcmd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163zfotajwh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163tifnjsvx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163smnhndoc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163gcpaoeyc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163frseyonm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163fmjfzblo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163uuccclhw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163inmpvsqf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163zgxitwas.html

================================================================================
来源：http://www.xuanzx.com/163iwzlcqie.html

J. 日期与时间
来源：http://www.aibaodan.cn/163qvgvtszv.html

================================================================================
来源：http://www.sxryk.cn/163qqvwxbcz.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163nvmwsfqj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ssbolept.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ekzmpuvn.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ctjvpprb.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163qkovoznc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163xdffbbgp.html

Go:   time.Now()
来源：http://www.xuanzx.com/163lcvgonds.html

Ruby: Time.now
来源：http://www.sxryk.cn/163gpehelig.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163xxolqmoh.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163epdyiuyr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163dkkkpsze.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163iuywsbdo.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163wdgmybqx.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163hsotpugg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163oealkbvo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163wkozlkql.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wrshkeyw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163resqpdbc.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163rroyaigd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163lbnryivv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163aatliqmb.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163nbppsavr.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hagpttvi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ifyllzpa.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163xwsmpzah.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163pxttgsuv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163zduxexxm.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163oztwcasw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163vuohyrts.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163krwxtiel.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163mevodamf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163dshpvjkd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163xhzvxzlv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163kahnqaew.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163aswityla.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163vlfmbmsg.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ooriivac.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163uasiowwb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163miogvlpg.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jiadjhky.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163xcldjztn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163xgpmrbqm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163rfyjtzry.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163rkxgltqz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ahdhjmjq.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163jzfqwphh.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163opqjnupq.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163yohzijyf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163emehjwyb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163wbfowhdb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163dnmxmdnd.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163yruzrwqj.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163lsamotdx.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163umznnkxt.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163pnymlykp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gtgkyrjx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ugzneiey.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wisotdlj.html


<!-- 参考信息 -->