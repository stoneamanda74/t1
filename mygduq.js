外链999!wailian999！

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163zjmqcrjj.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163yblqmezl.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163nlkvqmdk.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163zfcsvfrp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163tbkiieyt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ybdzixvx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163xzkzjywp.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163kbzcfojb.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163luayvent.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163dwrdlcof.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163vdgxxzkg.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163fbgvmivm.html

[G10] 访问控制
来源：http://www.sxryk.cn/163otahexol.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jqwpaexp.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163becfoeuu.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ovwfwxlw.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ofgexmhq.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163hyduppbi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ktvptxtm.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163cbnsyelj.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163guwiixaa.html

[G11] getter / setter
来源：http://www.xuanzx.com/163qzdiasme.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163uxkpcqrd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163yudffkeo.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163jqedsune.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163zagqlzxz.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163jppzfbfz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163dygktisq.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163jsqlyuub.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163yodbyapn.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163rcllxgvr.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163uibhpumt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163txrbmpqf.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163pbkprutr.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163eejponyh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163mtsspvkj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163punjgqso.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163wmcoyeeh.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163qnporglg.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163kwtwwerp.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163prxkoaxt.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163rlfavurs.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163lncaifjm.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163jgeaejfi.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163iprhcldp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163esujebpj.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163cfqlhupm.html

C#:   u is User
来源：http://www.aibaodan.cn/163iljxjfls.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163lzpxudxr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ziqdsicu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163wvhfbeli.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163bpetenlf.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163odryspdf.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163jbsxpojy.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163sedlskqo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163rahyhtyg.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163dadkkzju.html

[G15] 枚举
来源：http://www.xuanzx.com/163noznnlur.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163tgpqnkxx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163vaouggxs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163qmwtsdwm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gvkbdifd.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163acnrogqo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163yfosvolm.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163hmgpanqu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163tqatecyt.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163kgjjlces.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163svxluhds.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163cnjabbpt.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wzmpbfgu.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163exhrkvbp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163uookqaix.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163xqygeehh.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163rftzodnv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163kzbrxtix.html

================================================================================
来源：http://www.xuanzx.com/163qtabnmfs.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163bvkhewqy.html

================================================================================
来源：http://www.xuanzx.com/163rmtmnqth.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163gammsbby.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163exciaxow.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163iyighjov.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163avhuvysf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163fodcypfn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163uqfppmut.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163awellqgu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163pfnpsqhy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163xhnkdsbm.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163fhmyooby.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163nkfkwtur.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163olxdjznk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jxwnxzns.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zdweeqkj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rvbtccrq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163tetmmbmx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163gkrwxbjq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163nlyaibtt.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163gbzbowmx.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163pxazqmpb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xncqtmjk.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163cqgebemi.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163mcshjbhv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163enliumjb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ohizqycw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163dxiycyyp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163lxytlorb.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163fcgginmy.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ayxwzyhu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ddjtphfx.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bppyusgi.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163efyipadr.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163bllexcux.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163honoxpsh.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163zdtjvyyk.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163byscmogd.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163trdoqyhp.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kzyjabfj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ewmokdqx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wjovfnsl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xwzxznbn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163txzcokkb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163gxvzsmio.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163tjmrbgue.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163aryjggkn.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163rxzjyikx.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163soiodsus.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163gcdtvuzj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hkjtnpdk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zslphopd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163mnuuiayv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163dkgypsep.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163rhijiord.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163jasflnfr.html

[H07] 断言
来源：http://www.sxryk.cn/163dnkosjql.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163otwxojeg.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163fxdibizo.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163acwqkvgu.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ohloalol.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163zoidtaej.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163toehmzsl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163muoqpyvf.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ogkpoiqk.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163lnngusqf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163fstydnmr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163uzvpboto.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ieafatja.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163qsxgaesj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163vkuhcepn.html

Go:   err.Error()
来源：http://www.xuanzx.com/163dwmxxzyt.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163dymymntb.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163vogvayov.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163vkikusww.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163oilxqzii.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163gwilhrgc.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163khxbtpvy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163itktxdkh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163jprhttve.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163rwyyshfm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163yugvphww.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163bdwemkrx.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163uuzxzbbs.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ztqjyjwk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163vytyyser.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kvfphueq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jemfjqbj.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163jsfgnwxd.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163mldfeksu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163pigadwkm.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163rbnjxkli.html

================================================================================
来源：http://www.xuanzx.com/163qfxiguhr.html

I. 正则表达式
来源：http://www.sxryk.cn/163pqarvxdv.html

================================================================================
来源：http://www.xuanzx.com/163qhhntquy.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163wuvdhxiy.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163orsefqlc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ubvwnlam.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163blbictwo.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163oauffsjl.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163rfhdnuda.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163hzbcsxkp.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163xqobpggd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163uigmrlvp.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ozksekbw.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163goolbfik.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163zehwmmvt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163qzpuzwlt.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ypswwawy.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163gqdvlaiu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163htcjnlec.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163conlvxtp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163qzmmlnji.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163qoveawga.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163iuhzmqge.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163dyfqfets.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163xdbzrqoj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163zjyhwrmn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163mqlldnst.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163gwpaenfh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163idtcfoqo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163rqocewou.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163smasrdyw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163uiaelsgf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163kopfmibw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163guuvtinb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163oyuqylfq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163iskugbbv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163gypwoaow.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163blujatdm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163lwtfkodj.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ktuyfmra.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163fuqsgofl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163czuhctsn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163barwahel.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yklsoqmt.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163pvtybzpi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163huphypwl.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163imjwrajx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163qmbkjseb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ewtidknu.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163dhjszoix.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163nwjdkkny.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fgbnfryx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163tiifhwsg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163jfwmfbxm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163sukwzqgh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163yctzqnbt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163fyauxloh.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163zcxcblsy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163nattfjbk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163jjdxuuke.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163zxfughve.html

TS:   /error/gim
来源：http://www.xuanzx.com/163luqqqcrd.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163jvbelxhs.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163irpwgnzz.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163zuvlvtec.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163rqjtgncn.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163jyebkrjz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163nyszwbpx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ioznldtx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163yhwslvpg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163rhjjqlrn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163wuqyuehz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163wlyaukhg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163dbwsxrmd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163gjrccdag.html

================================================================================
来源：http://www.aibaodan.cn/163obetbziu.html

J. 日期与时间
来源：http://www.aibaodan.cn/163zfueueot.html

================================================================================
来源：http://www.xuanzx.com/163wduxxkpx.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ugfzklot.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163inpnedaw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jwdlfxvo.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mspvhnkl.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163nulnqydo.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163hgjcchve.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163okpmwozg.html

Ruby: Time.now
来源：http://www.xuanzx.com/163blvmjgkc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163vatohxnb.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163cejlpfxy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163fxzvemak.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163duwvqxjz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163njrhijqk.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163dterkvpd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163luaeczpp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163wavcwmoi.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bntdnxsc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163kckrfkzl.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163jatzfxwq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163jptngqac.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163tuxhqydi.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ygimycun.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163uqxrklbr.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vfnxmfoh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163yswccdsa.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163edohxqzn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vdcdmdjk.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163xlzlelsi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vqskpqwn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163xmrpuudb.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163njypvsje.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163axcdxnyo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163uonzkbgt.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163fuloogxn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163hiyhajwg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163zdezmebp.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163wvudouax.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163theuqyjp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163xfbcsjif.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163iirldsux.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163zrsojxfr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163bzswllij.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163fyetqcev.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163quwvxjay.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163nmozqwau.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163kwyynxtb.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163mviyafis.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163txkyffaf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163enurkwbj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163hjhcsmrg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163iweydzny.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163mxoyxtgl.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163icpcwbjz.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163lbxinvzz.html


<!-- 参考信息 -->