外链999!wailian999！

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163mmzjyckb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163hstkzdmw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163lieapozq.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163tafkyfvb.html

[G10] 访问控制
来源：http://www.xuanzx.com/163zkgcvbnu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163wpttqkbf.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163jhhxtkue.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163cgeesqmg.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163uijutzvq.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163kwgbssie.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163rwtjbldm.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163cwydmpjd.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163bmgstvjr.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163hdoxwgki.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ifrghfod.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163actmadku.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163bxamcovm.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163qvxqbkme.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163cqenefmz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163zarmyhhh.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163zcvetfjp.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ttzzreez.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163nzaragnw.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163oksjlzjo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163gcjkvphk.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163lirzkpzf.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163wbxqigjv.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163asnotxrr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163mcirrzzi.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163kdutplri.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163lmjcwnsn.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163cmufmgsr.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163xfzynnqb.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163btvezktk.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ycimtrux.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163dpjpwyhf.html

Java: u instanceof User
来源：http://www.sxryk.cn/163gilvxixb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hjyeiawl.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163msoaydhe.html

C#:   u is User
来源：http://www.sxryk.cn/163hdlfhzuw.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163qniileak.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163prnujxob.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163txuclhmt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163lhyveupk.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163yxlsoroo.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163tsbpxttn.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ykhbltey.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163pdruvkbc.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163lfywbkjv.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ilhnaqrh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163wxmktgmq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ywsxixoi.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163hqllwnth.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163iovryyne.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163yavuleyp.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163twwtghhq.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163oejqsgkd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bdfwrmfa.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ichphogh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163rsvumilu.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163jlaxvxkm.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fcvwmkxv.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163bcstsyaf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163fwewayis.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ocyzgoop.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ynviwknm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ytsfuzyv.html

================================================================================
来源：http://www.xuanzx.com/163nokqldxk.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163mikijdar.html

================================================================================
来源：http://www.aibaodan.cn/163ebjgecor.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163xzkzsscl.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ymnosqzb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163rwykhugm.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163hfieceiy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163dgbhayge.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ykbdsuux.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163qgweuszn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163tzlpbnkm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163baunvzww.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163qvjuuxiu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163aevpomyw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eegeygfy.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eredmklp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pdciqotv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ngjchogv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163qpfrlfru.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163egdslsqb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163htcbdvhz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163xsoelkkh.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163jwleirgc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163tejctoss.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xjacglma.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dnwhzdry.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163cjidgwel.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ejyhhdba.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163lpadiarn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163bharmkld.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163xbdxtolv.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163iurtzozs.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163xjbdwgau.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163yccosqyw.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ehqohadu.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163qqiznmsb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163hzemiegl.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163byueeyrn.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163tdtjblyv.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163azkczkyv.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163tkhqxyqt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163lvmceepc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163iwqpsczm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163mqnewjvz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163pdbvavwb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163tzrhlmxd.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163krrdsdvx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163kuclvioq.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163nvownsfs.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163vnwhlqsv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163mfrayyqt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163lkaawhlc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ehkrkfgc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163cmtddgqr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163bfbigntn.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163nzzmfgmz.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ptwnmcar.html

[H07] 断言
来源：http://www.sxryk.cn/163mdvirhdp.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163dfgwpcqe.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ekukazas.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163hoqqyvxf.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wrccavpp.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163dfkihbak.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163asptveyr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163aiegivsy.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163jstykrkr.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ptenpoyn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163pxtijhhr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ofnhdbgi.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ykkjlsbn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163shatygdy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163njmnujuw.html

Go:   err.Error()
来源：http://www.xuanzx.com/163bwfdyzkw.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163tomqragy.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163agotdngi.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163pbvscpgp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163vwevpjca.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163akbogwru.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163vvhcpwje.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163qslnepfo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163atwigggq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163bzqrebfx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163zjtwjpeb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ktftcybc.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163pobevatr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163tqimgdrd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163lfpvbfyn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hrkidxxa.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qkduoaxk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163nyqhfatl.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163rknrbjzo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ftnsnypb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163haspnxiv.html

================================================================================
来源：http://www.aibaodan.cn/163amfkjfrm.html

I. 正则表达式
来源：http://www.sxryk.cn/163mipxffcf.html

================================================================================
来源：http://www.aibaodan.cn/163copjbmxe.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ztqxwqlq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ihbrmcac.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163cfwgjmzu.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163mjwmqari.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qojwmfny.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163srlvfpsd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163axmebzfg.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163rehrhbzb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163yuqalcuz.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163fikmrbdr.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163vwlbrfmd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163mmamzrsb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163eqvbwqvy.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163pzymzyjp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163finkuqsm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ipppnzxx.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ilhwnkgo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163xpwrepnj.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ajvbsgec.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163avopygvl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163wbkitgqh.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ecrtsnex.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163xvdddjza.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ntdzhklm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163drffoknu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ylfuhexq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163zydjfxhy.html

[I04] 正则替换
来源：http://www.xuanzx.com/163taswmcin.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163xturknsl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163bbrvwuiq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163hgceijit.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kpmkibul.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163jihegpau.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163rftyetht.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163emaxqapu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163jlpnvhbd.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163cmraaimz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163hzibqdfx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ghkatbdt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ctskxthb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vurrahhk.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163xelwmmoa.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163sqlfxmfv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jwivimsu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163nujhkqum.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163tzwjtxtk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qkajoxpg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163xtkunvoi.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163pgnxciup.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vmmofcet.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163xtqegdmy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163elgozajj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163kbvvvtca.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163swxkneho.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163qjstzgeg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163fgnhlmlf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163rddavvhu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163tmxtkuat.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163coklytbl.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ubgnenny.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163xfpdrnzy.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163zkbtnbcn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ccvcpaud.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163kxhxvpvf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163rgmhwadh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163zjquqvqq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gqxfiepj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163njluysnf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163uyjimmjj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163amfaszys.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ewmcukqe.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163cdtmecum.html

================================================================================
来源：http://www.aibaodan.cn/163mrbzfrlq.html

J. 日期与时间
来源：http://www.sxryk.cn/163pkzeulfj.html

================================================================================
来源：http://www.sxryk.cn/163zjvlzgpw.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163xawtxwvk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163yivsozrf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163eighvzco.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163axarnaqb.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tkxykang.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xzjdfrgm.html

Go:   time.Now()
来源：http://www.xuanzx.com/163jgnjykrs.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163uqaqeofn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163yxxywwsg.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163dkwvczvm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ztbdpads.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ttuwiecu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163zjzbnxkv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163jhbdfyjd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163xsagauwc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163xukueego.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163czipdslw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163wdbwafat.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ezhgoiue.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163bpuunkzl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ftjgkadi.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163gucomojj.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tmhgxoiq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163tcqmqaqg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ypvjmraj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163cnqmfupc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ingoqkhe.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163irpbwcuf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163biylhzrp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163dzpzsjmz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163sxutoucp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163murpbrxz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163yueetzum.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163djubdskp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163gcbakwat.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163cjquxnqa.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163gzxapjhu.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163oxffjdsf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163eoskipcu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163pigaeocz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163nictsosa.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163qzccosen.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163kjbvrebg.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163lxqmhsbi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163idnvocpj.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163pfvdlbym.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ouahtgjr.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163kleklgta.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163pavombgd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163dnfrmemt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163vjpwrdha.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163rizkqbih.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163vfohwshw.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163gigclczh.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163tbkbpoxj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uenyfzsl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ufwzgwuj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qklpavrl.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163kwixdubj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wrkvzyfs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163hmfecala.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zxnpwjye.html


<!-- 参考信息 -->