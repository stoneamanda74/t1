外链999!wailian999！

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163yfiponwh.html

[G11] getter / setter
来源：http://www.sxryk.cn/163dtddcptl.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163dktypewq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ctqogmgh.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163equgbwgh.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163hxwksoxg.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163rqoenyjd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163noutzrxa.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163nxraayty.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163xvvojbae.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163wqbezovs.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163lppezavz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163wzywzapv.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163hzkrzsga.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163eotnuaos.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163aaslvitg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163weqhbrhn.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163tuajcycs.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163asegqxag.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163wyvdwalk.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163qadtyxiw.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163lifnqdmt.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ufcdhsix.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163shnhgmum.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163gdphtnvu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163wpknxtqt.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163cavliejg.html

C#:   u is User
来源：http://www.sxryk.cn/163epzqsdjl.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163zauyipac.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ixxaeilj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163aduisuru.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163knjxuopx.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163avejicku.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163lmsrjdnv.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163qxltdlqy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ukzpxxje.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163apbqygia.html

[G15] 枚举
来源：http://www.sxryk.cn/163decoedtk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163kxkziasb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163zdildtib.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163wfdvlvvw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163gzelbxyv.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ohqqsmba.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163csrbypgi.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163kgkivqtp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zihbuxlu.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163guyltneh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163svhwqllo.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163yivxigon.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mhwxwhla.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163plnkithl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163cvhkqomp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163htyglnng.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163blrdreoy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163zlihajpy.html

================================================================================
来源：http://www.aibaodan.cn/163mbcjaidt.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ailattwi.html

================================================================================
来源：http://www.sxryk.cn/163zlboojpl.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163esvqeilo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163fmnjxavd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163mhibcjyw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zgujwtse.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163nadshxtd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163wlyjqyfm.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163dmzlgdbg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163iuolcgud.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163lllyxjny.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163utquensi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163urgswdvw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163sbpowmhw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ckgfpgan.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hnjjioye.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xmzintcs.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163oyewrkob.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163hcxmeqpm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163emukugun.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163icehuage.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ysldwqmw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163uyglazmy.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dhsgorjt.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163mospxiky.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ebybwios.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163hoiqjipi.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163hedmtiqu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163cgnofijh.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163bminqgsv.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ekabrhlc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163spshncjd.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163hwitdled.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gynhoouc.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163qnrikpvv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163fevslnkc.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163xufofhfl.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ccivuznt.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163pkfjyyfl.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163naectktr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163skndvapo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163tryfndnv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163prrdisgh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ylrpnomy.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ywafjlsb.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163jjiaabnz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163egyyoecu.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163cjaizvep.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163zbulxwrd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163whuzjxrb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163nbeywsrm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163oildloyx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163sujrlbex.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163voxfzatg.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163spjitrck.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163xvksbpbs.html

[H07] 断言
来源：http://www.sxryk.cn/163qodgtkjb.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163kaexvkag.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163hfwrfefi.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163pzltexnj.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163bccnyywj.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163kwsxjkxe.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163smoaspim.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163gpshxgec.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163isuqdymt.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163cjelrpya.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163tlneipju.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163sattcfsy.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163kluymmnr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163cjajbapm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163cnbcryog.html

Go:   err.Error()
来源：http://www.xuanzx.com/163szqyemcs.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163zfarcvcm.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ekdldavt.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163fhpjshyu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163axuidtok.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163jcpxqvpw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163vzelexzf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163cknjadpt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163vkfgsamx.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163rkhwrmip.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163iucqrnlv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163lrgcdjle.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163eckyzhio.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163gsyoaemn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163cbkyyswj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tgfftquk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163nitufdzz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163cdftwcpl.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ymfqblry.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163azurtdcg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163siwsvrfb.html

================================================================================
来源：http://www.aibaodan.cn/163ymlqztbz.html

I. 正则表达式
来源：http://www.sxryk.cn/163lxrvtqbb.html

================================================================================
来源：http://www.aibaodan.cn/163uceczshc.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163tvmchrvn.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163hpdvlwfb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163tbpgzmaa.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jothxidj.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fyematms.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163nvzqyige.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163twrqhknl.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163mfrejpjc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ypbekvki.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ozrylqdb.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163stjakjqh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163bimvaifq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163vmpjrhhw.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163gnouclvn.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163njbnauco.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163zznnbbhk.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163hotsrvwp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163enaiqcby.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163npljerxq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163sfoqexsv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ahmitgas.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163xvxmlkzv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163fdfsjflo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163hbjzkbce.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163tylhlinb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163mhstjzbx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163mfuktplj.html

[I04] 正则替换
来源：http://www.sxryk.cn/163zaxvzqwq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163wplkgcal.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163sjbyttvr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163rccxlngw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163uerdwxmb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163gzxdswls.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163anyvkumo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163nxkfpuay.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163xdxwjxjx.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ztfjvoiv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163echbyvqo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163zhdtkzuo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qvdpunxu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sjddilol.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ssapywqq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163mosobxae.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zvneekpl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163qoqphcwh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163fraryobv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163gzytnilp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163xettyjqm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ewhnyegq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163rplkwdgy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163crhyxoyc.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ibkctrbc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163gcqcwuvx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163cuxlmpkd.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163lftqheky.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163jjumzfgt.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163onhmvphf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163dbodjmsf.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163uwimjker.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163gaoavncq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ezfddfdu.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ioinyrfj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163tkeracpd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163zrjvlodl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163tguskpig.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163bmwzhtay.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163maamxgji.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xpkjwbey.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163uhnkaois.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163yxbduild.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163xqrlwgcp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163xspdydjv.html

================================================================================
来源：http://www.sxryk.cn/163foviwhim.html

J. 日期与时间
来源：http://www.xuanzx.com/163uqrdelxu.html

================================================================================
来源：http://www.xuanzx.com/163qjqajvge.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163fddlhrea.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163fdxdsljj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163pzrxaner.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vxtgohxx.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mocgvjag.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163eekzubrh.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163upjxhikw.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ymcnlvqv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163mvvcggko.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163epotiyvk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163csyanclu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163tgzjwjyr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163pnkqohub.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ckrdkedu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163axsjuvwh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163yeloejod.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ahvwdfbm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163nvjxapma.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163smjqgiwt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163dtfinntu.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163urmbaiqz.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zsqcopfj.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bxwgysqy.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163jlpxpskj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163nifhcehi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163xkkdhwsc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163uuhafffu.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163unfllmha.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163doucgxew.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163sazshqab.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163tjkazmui.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163wztaatee.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163sdtrtheh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163gpizvmni.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ytsoxvpe.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ojqutmzh.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ehuyeubj.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ebpggkel.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163yczhbhvv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163whhtpbxo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qoipwqfx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163mexqiydq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163bgmirnhq.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163yudkdnuv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163cfegkoiy.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163pajonjwi.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163bnvvgqdg.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163dbibbbnr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163zmfxsaca.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163bdhffuea.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ixugegwy.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163kszyuqhi.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163wrwuokaf.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163cxhbyhxk.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163civizlfs.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zfeygdtc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163vtasofbk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163bnzljnpo.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163unnvitwa.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163sfxjdtcj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163pcuanqvn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jymiaisi.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jcswamvc.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163babtsnro.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163nncmkdqn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163zpdvmhxy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163vcejsmlk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163gecinsgc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163yunurpaj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163wpcaxbwe.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163isvzeqwy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163mebrgzuy.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163vvzxugub.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163sfjkudnz.html


<!-- 参考信息 -->