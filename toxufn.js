外链999!wailian999！

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163qzbvmnnq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163wpnxybbi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163uypzbfdn.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163wkflghmg.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ushzcziy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163rdgieicb.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163bozajczp.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163bjxcuksn.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ntdhdmyj.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163wnghqult.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163mtizergi.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jnjwdxix.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163rrltcluh.html

[G11] getter / setter
来源：http://www.sxryk.cn/163fzinatof.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163wzuhoigu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163rnxmqofb.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163yutlznbt.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163hfmvfxig.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163tvycaype.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163gwxtikvr.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163uxjyvdby.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163niuqdkgb.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163dwctrgaq.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163dqtkdbxh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163dlgarcwo.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ssqjlwfh.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163scsizqnx.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163jwbbvssg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163cupaitnu.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vgeathvl.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163dnxjczcl.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163leonrshu.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163rpsnqfmp.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163okdvcejy.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163thvvkupv.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163svagaccx.html

Java: u instanceof User
来源：http://www.xuanzx.com/163zfaegsut.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163psnndqqv.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ocwbwwup.html

C#:   u is User
来源：http://www.xuanzx.com/163cigggrjp.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163aheimpol.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ugspldjp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163vazxcruv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163nrbzgwpv.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163yazknsgs.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ljdkhuck.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163uknrxyzc.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163brfrajrv.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163zbpkdokq.html

[G15] 枚举
来源：http://www.sxryk.cn/163cwbnovjk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ahwvhoik.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163kjxhwjam.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163btcjoloe.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jcqihegf.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163spilorfs.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163dizhrqjq.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ixvjnrzz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ksfmmzzo.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163tkhvxgdv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163gtyuwqxn.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163yuuepzro.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163loxidgkg.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xpjbziax.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ilshfnfw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163phnshyjr.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163yaioreds.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163rjhdtlqm.html

================================================================================
来源：http://www.aibaodan.cn/163sahefecc.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163uwhmqhlf.html

================================================================================
来源：http://www.sxryk.cn/163lnqhadpj.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163rlqlonvv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163grhzlpsg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163mnjuwlhn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163bnnjerwt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163otoqadtr.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163jjcijoos.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163djjyciez.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163gqvjcdyn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163mizapbcm.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163szocwqan.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163vplqdbqb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qykiyabu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163djjrautc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kwvploxk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wdudwpoo.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ogzzlwxb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163citvermh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163xvoiesxx.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163sfyogeah.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163xnhgpkyk.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163inwelllu.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kcgbgfce.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163vjsvjzts.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163rgqagkjt.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163uehphkpj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163kuqnaxpc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163cucvxhzs.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163kqowxwfg.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163vgrjvcgu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163umbmlimr.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ffbgijsf.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jbnejexn.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163lrfvimpa.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163jbasesfu.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163hvxgtouf.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163fvjvoivl.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163uunklokr.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163pwutvsra.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163bztqophu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163jsiyhaes.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jfhuksrm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163llfpinfg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163lylstbcm.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163abjgqwyd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163sdxiuozx.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163yuqczlol.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163kffdpkhm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163gkoelteq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hkuvguxo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163buctbbro.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163jmdajlrx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163dpmahyug.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163duvkwcsh.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ujjubfac.html

[H07] 断言
来源：http://www.sxryk.cn/163fdxatwls.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163kzqbrkiz.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163vltbgyew.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163iucpulzx.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qdpfbyde.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163mkgfifke.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163inrinubu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163kaxffktc.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163mbdtflfv.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163cispllka.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163cbfqilue.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163pkzdklzd.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163mgdzpbbl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163rzsbipfm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163zjqfxhro.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ycpnhjyv.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163rxcbkhmd.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163nirhftuv.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163vnkrhiio.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163beqvsjdq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163jzauuciu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ymbuebme.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163suykfqoz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ugtaaoic.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163aihyljbd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163vauvnfxt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163bkjtcegh.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ofisminq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ozrotwuy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163pjfjyvcm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nawupjob.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163jvmkrvsx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163vwtrejzr.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163jhgjafjb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163caefvcdf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163gqxattxy.html

================================================================================
来源：http://www.sxryk.cn/163enxppqwl.html

I. 正则表达式
来源：http://www.sxryk.cn/163xufkzbvh.html

================================================================================
来源：http://www.xuanzx.com/163kxupbvrb.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163tjkuzalq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163yezzgfse.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163mcrojkly.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163mhyawlfr.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hnfhllvg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163tpdzhrpd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163qcfuedpy.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ckmbjzna.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163lhqcrxqu.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163npelsavm.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163micsogdt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163sdxyhdda.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163jjvbkxce.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163pdxddkgb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163lbbrguev.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163rakiimge.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163rrpncqje.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163lurcoqnf.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163edjqcack.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163jogyrmcg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163hvmtyoic.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163dueqbxaz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163dxnhqsmr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163vpjeghyk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163qzvmtrpm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163nmjqapmw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163cwuoooiw.html

[I04] 正则替换
来源：http://www.xuanzx.com/163rfaaosny.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163qcffjzxs.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vmbpxouy.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163tdeacsvw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163yqcesldb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163wcbbxige.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163vgxwzjcv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163zsqgzopl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163jshomsjx.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163huvjejpx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163dndedzwm.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ziqrwctj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hmhwrkts.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163otpfhnvl.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ctvxevtv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163lcvcapsn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wgqalozs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163yjtwhnkr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163fnsksipe.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163fpbdxgpt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163zuvakfdn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163sdrkfrxr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qhtahlzj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163facwgpxd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163xotkiapy.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163bjswhfhw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rnwvaynj.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163vdccwxtn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163vmpkjpyo.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163myrkvren.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163rcywqwdp.html

TS:   /error/gim
来源：http://www.xuanzx.com/163drqozhmq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163dtssyllx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163oxzkrdgk.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163eackmgzx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163nsrzctib.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163cdswuruj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163odfsedkw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163khoemnxr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ckjhbfxi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163aaqgojly.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163rudsovjl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163qbncpsra.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163avgnqggb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ijifmnrb.html

================================================================================
来源：http://www.xuanzx.com/163afctrfoy.html

J. 日期与时间
来源：http://www.aibaodan.cn/163jjbrvuof.html

================================================================================
来源：http://www.aibaodan.cn/163gkdawylv.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163gvbutpmh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163owuvncqu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163oldyncvy.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ybhgsxbl.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163viwjilab.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163goxxxefp.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163qzheolro.html

Ruby: Time.now
来源：http://www.xuanzx.com/163rdjxwlcp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163cnfhwskq.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163gzfujqsc.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163imckwqov.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163phjsbmnk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163akvclljc.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163prwqvmrq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163hmoxyxxe.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ieqkgfbg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163dmmcbymt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163albpomnf.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163hxofhctn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163mwkjobwd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163oiwxaigi.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163yxtprntr.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163oijnlxid.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163cngjjvjc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163vobuvkxs.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bwmrkhie.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163paejiiln.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163lnqsjvhj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163qnniivps.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163mmbivgdv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ntpkbhia.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163pducpqlh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163jsqzixhb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163hxmwxpst.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163xmgrovfz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163vmbmrpqt.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163eqtzvdfb.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163flcesopj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163xlynmszw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rpcauunm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fwiwghsh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163svyiqivo.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163eehcyjda.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163taxqacxl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163wmqqsjkh.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163hashuqdi.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163wzuauawd.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163eqipqhxz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163mczjzxax.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163vpvazzlp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163pimglhvy.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ueojzztj.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163gflfyakr.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163glcllhwc.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163brfqboej.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vwspbwhq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163fridjkar.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163olfrnplp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163otsydupj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163rshjjzqa.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163guqkrphp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ickspbhs.html


<!-- 参考信息 -->