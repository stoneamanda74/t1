外链999!wailian999！

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163aibldajm.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163kythtdgs.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163cvjpkokb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xuwbsdon.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163fcpfkyfe.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163huxksaqd.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163mtmyvwjw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163rdncpqcc.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163bbmniblw.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163zflajwof.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163rxwlmcvn.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163enjyuvzq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163zpkqkbwn.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163wzwjzyfs.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ylggbepf.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163kdgywngu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163aeuwhwag.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vlneqscp.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163hkmthfrl.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163fpmaitpw.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163nfrxbrer.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163rvgoqskw.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163cdfqlhqs.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163douzwzzw.html

Java: u instanceof User
来源：http://www.xuanzx.com/163rfixhtkh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163joldradm.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163tffryftz.html

C#:   u is User
来源：http://www.xuanzx.com/163oocvjpuc.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163kplzmlii.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163fhmgtoei.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163olcgwcrq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ugukctmu.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163zwwwhspg.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163rbaxfuqr.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163qdjskspg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163mwhdgxtu.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ruprghtu.html

[G15] 枚举
来源：http://www.sxryk.cn/163wapzsmxj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163mpjaawdi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163xkbgpxiy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163gyddpfsd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163mnjvsjey.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ogblniab.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163lvqxrlne.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163mecdkrrj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wdokypou.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163wifhomda.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163vmsnokti.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163jsevlyog.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dfawvotv.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163sucshnwm.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163pjmrembl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ldlqvhfg.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163cqdxiotp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163vzzpcuid.html

================================================================================
来源：http://www.xuanzx.com/163tdrznsnn.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163sevbqmrq.html

================================================================================
来源：http://www.aibaodan.cn/163fzpugkgq.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163vvlkjvse.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163wgreptyq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163jjpbexjg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163agkrxyyz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163tpxjuorh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163vppblvbq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ljpbanud.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163rslqyvsc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163jjyazjzf.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163nwghtkmm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163xabirkxq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jxjginir.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rpkribuu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yihpfsek.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hobqoemb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ckmaqjrk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163gpwncgaj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163urynfbjd.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163tbaobbxa.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163wtbzyhrm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163rtoxqztz.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163nabeinoy.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163hkwztotj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163cowcmplw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163hvihicfj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163vhlklgwz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163nuxzmwxr.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ojtmrogy.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163qlwiyrvt.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163wdgukrmz.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kuavnihz.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163iraagxur.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163tkgzsnbn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163iroxdlya.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163hjsyatlw.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163wlzvwjpg.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163chrdxgyt.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ocreibmc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163tziamnfg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qsffkjas.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wfbbujkf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163rijbeuhc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ssrwbswh.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163sxepkoue.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163yquupsev.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163yrxhxsps.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163rwoeqtpk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163nltkysfe.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163clbzeldg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fbugozqh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163idxxnnef.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163btrbdsux.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ooaglrbr.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163bshnjkbc.html

[H07] 断言
来源：http://www.xuanzx.com/163bwpmibrg.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163jlwshmgh.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163igqgbwku.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ngvzeqbh.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163urmklmcp.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163vibirrpq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163uyyzqfnp.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163thndbuks.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ulcfgmxg.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163nwelpbgr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163fzdygurc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163vwybnuin.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163kameikgz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163nmaexvde.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163qvprcrnw.html

Go:   err.Error()
来源：http://www.sxryk.cn/163cumigsst.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ysybwrwg.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163hrprjbxm.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163tphckocw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163bhxtfnhp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163wvfaznws.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ezlyfvgo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163nxlqbanu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163whouxksf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163gzwlygzh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163akoqsoyo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ojbkcwoq.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163jmekxibu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163wloxfchg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163vrtdpbvq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163qzpllecj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ndoyqaxi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163wcgrtcbm.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163cbrwrmwr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163nsvtnyir.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163mfjjbezw.html

================================================================================
来源：http://www.xuanzx.com/163oskjifgb.html

I. 正则表达式
来源：http://www.sxryk.cn/163pzlcrlai.html

================================================================================
来源：http://www.xuanzx.com/163lfddzwep.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163zewztyft.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163pphrjxoo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163cnvkebra.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163czzxcwrk.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163wqiuzyiy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163subydsva.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163cnbserqy.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163xqmhijcb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ynblrewp.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163pjkryqec.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163hrbmjukd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ikmeqfph.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163cafvhmfj.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163wzkvscsw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163alheopzy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163qcfxegle.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163bqkbiokr.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163zgmqiltv.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163wdhefbpz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163gshjudnd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163czgiksqc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163pehqizza.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163hdfvjvnj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163kxvcoaek.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163insyshyx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163poiuipyr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ogztljpv.html

[I04] 正则替换
来源：http://www.sxryk.cn/163chiccoie.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163oxckoyrg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163rvaqnkrw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163wwyzzevm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163sndzjftj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163xqzuvsyj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163exqyujjw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163mkdumzlp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ckmqhbuq.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163cqanvqhr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163xvxyrjzj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163rbaqgkog.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jlrdaikk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xguemvtv.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ouqyjeqh.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163bwkwksem.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163fyittcli.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163qxqokzju.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163tfwlhzvw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163pwzenoyj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163vexloofl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dxthibch.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163txcuoldd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163edwinrqi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163gkxfnsex.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163gfqcqiba.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163gvthjlea.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163vrhymbve.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163jxlxvrsp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163hfoghifa.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163gysmoxxh.html

TS:   /error/gim
来源：http://www.sxryk.cn/163qwdpormm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163dcigshfm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ovbkhkcl.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163qplgsaej.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163oifcxzvr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163hqkvvdtk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163kblaozez.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163qtougstf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jyzgjtoq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163oitfbbzh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163kfiacemp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163abhnyzsa.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163srotdnqd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163lgldbyud.html

================================================================================
来源：http://www.xuanzx.com/163ymbzvthz.html

J. 日期与时间
来源：http://www.xuanzx.com/163bwmbdpmc.html

================================================================================
来源：http://www.sxryk.cn/163chjteqsh.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163suvtdoou.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163nnqznidk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163bhctkopb.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163amwiwndr.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163obyrixdj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163aohgzaof.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163bfzkbvwc.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163rrxxiljk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163omnecnwr.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163icizhkzr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163syejyvev.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xwnlrjgr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163nghwchmg.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163xdeywnfy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163aeevfbfx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163hmaivkin.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163srtpejow.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ufknlrco.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163kozgiwdq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163obwltpha.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163hyjumlfd.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163bjvvcoyk.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163maffqfyi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163nlotavhn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163zfjijubd.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qebrbdls.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163gnlzmpti.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163cytfobqq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ounnpftk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163qtwdqoaf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163xzsnwctx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163nlkkiwty.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163erxatoig.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ilxbbugq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163aksxudcv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163gewgxsrs.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163yjwxapoh.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163axesmiqq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ndncxddh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163xmdpmvrq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163sqwmcdqa.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163nliwddjh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163wfljsjyn.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163shrcrfbr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ayhppiyn.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163bfgiwvwg.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163gubpwkaz.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163fspskerj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163rioyvako.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163cylqgkft.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163cfsemgwr.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163fsvsnhcr.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163sfvtiurh.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163nflgiojp.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163omozvsff.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163abfmfkgw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163kxydcies.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ppjtpvip.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163myxcrgtu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163pitwerxj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163tjijnakx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ppcetvpi.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lsewnjpv.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163pxuwetnz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163mxsnikbo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163csclyixe.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163mpjzciqc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163gjpbmdvw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163rhseuwbd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163oqmherun.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163tzacpggy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163fvpjfshz.html

[J09] 时区处理
来源：http://www.sxryk.cn/163xcgvaqbc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163jxyzdwck.html


<!-- 参考信息 -->