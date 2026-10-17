外链999!wailian999！

[G10] 访问控制
来源：http://www.xuanzx.com/163hhhjnfdo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163klfrfanh.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163farmvsbu.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163xfyuhaod.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163okivubxp.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163hqvbgvsu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163gkodlcyw.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ykucbetc.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163fzlkvuqk.html

[G11] getter / setter
来源：http://www.sxryk.cn/163jnpkrsbz.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163kghojrqm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163wbpganwb.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163zflmvwmz.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163pdwochfg.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163pmffypzh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163yxyzywfu.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ymufyqxn.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163unxzbgrm.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163cbgtyvln.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163mupbtgkb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rrstzfto.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163vpltzygc.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163zqggkbdw.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163lyvbnjrq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163lavcmsuh.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163nbpijhkc.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163xjzapngc.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163gbumwrwp.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163jdqerfvf.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163txwmkbux.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163yzpvbdrs.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163rwxuwfeh.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ubwjgnue.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163twiyeegf.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163cfotkjmx.html

C#:   u is User
来源：http://www.aibaodan.cn/163sjjkimjc.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163syoceozu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163elamkjpd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163jgbcfvcf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163lzhnkgcm.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163zwwppcqv.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163isspqlvs.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163pamjnbcd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163zgczesei.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163wphktjiq.html

[G15] 枚举
来源：http://www.xuanzx.com/163iycjfqsv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163bgzorluw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163vnlkxcvs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163lcyaeeyn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163nqhxdxxc.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163fhqxvdjy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163uqhuzymf.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163czczjvjj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163cisnrpow.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163sueocslc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163djcjycwl.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163icvqeack.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163aooxhnrr.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vbjmgosi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163xzdvambd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163vgbhzniq.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163hxpbxrhn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163klgqnhsg.html

================================================================================
来源：http://www.aibaodan.cn/163zexjnqry.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163sjcwcmjm.html

================================================================================
来源：http://www.aibaodan.cn/163rfunfsqi.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163zqodexeh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163bymqzylk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163blfbzbhh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163hrigvoov.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ryncryoy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163zunoumxc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163kjizgnoo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163morixmow.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163veivwbgf.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hczggggp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163rbpcgtiz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wgxxnnps.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ckwghqcv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gjfwkckw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vwmggnqt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163rvslwkzv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163bixffglo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163tgqpteax.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ajflnugz.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ztxteqvu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163aapdilqo.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qiahweim.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163kqtvmotf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163vjknkinj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163zzuxudql.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163jxysionj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163wtehxzer.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163qoagujhw.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ijqfntux.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163xvjvuxaq.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wgbalurq.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ukhwulzu.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163sizbtfyf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xqplhbho.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163xsttodny.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163hsfhtdpp.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163tvovupcv.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163zpujgdqv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163qgrastqh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163olfpxvea.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163thmwmsjv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163kmsdybja.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163kncrqzpx.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163riepbgil.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163bemxwajm.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163irruwmfq.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163dsgjfpyg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163nuegfuxo.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163nwmkocid.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163iosudyjj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163znnndjiy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163guotqxml.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163phaopgri.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163wpcruooj.html

[H07] 断言
来源：http://www.xuanzx.com/163fktshdbd.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163vbdwosgt.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163gkrabhsx.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hfanocza.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163srjqjupc.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163khmutury.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163tredhibg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163zwvfnszf.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163xlzzblmx.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163abjagpjl.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163gjhjdzua.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163nmtqhwwe.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163pgdbozdq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163dgsksqtp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163mfglitbu.html

Go:   err.Error()
来源：http://www.xuanzx.com/163kshauaif.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163uhnxpjma.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163tkgespze.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163kohshjvk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163zpmwhqdo.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163zdqiasdl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163uzyjhlol.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163tjhdeemn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163srvvocws.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163rpxnstla.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163gukemhln.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163hoayqebs.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163wxeyiplb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163sguuzbxw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163vgtieery.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nhnsjoly.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163facmhvyq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163qmdfdesw.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163bysplltf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163efegvbrj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163bthfkgmi.html

================================================================================
来源：http://www.sxryk.cn/163zljpiywj.html

I. 正则表达式
来源：http://www.aibaodan.cn/163eljpkflh.html

================================================================================
来源：http://www.sxryk.cn/163omefnwny.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163rpjrucvg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163jqlkbmol.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163zyrxacjg.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163sslbkwfu.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163gkmhtvqt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163imyooxnp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ldnklqti.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163tctqclba.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163qzgovebt.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163mdhpfthd.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163tesswpro.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163noxbexuq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163uxmgdjgi.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163sowctksu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163xadgdpun.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163giwctepi.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163rzqapvmy.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163tithzwxw.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ogkndffb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163hshigswm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163spuqwmyd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163hsxblvbc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163mkrywkpp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163qnnnsvyn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163opjvwrui.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ebonhibv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163vizpeibi.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163uguawbtt.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163uxclbhno.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vwmevggn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rmyoolkp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cvlrkgzn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163bdtfqgec.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163pdgsdprm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163vdnpfkps.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163rlbxcmwr.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ljzmumkp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163fqmslxbk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163slzqemla.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pkebvcrb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dsxqtttr.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163phemevmf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163gibjjfld.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163otptvorc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163tpgbmkxm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ippueayr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163npaonqie.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ovbxjwjf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hgqysqgf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163itduwvao.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163fzoltrnd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163trprsfow.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163fruvkxdl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163yrrqjyik.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163xbymtxcv.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163geqsurit.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163jcrrerpj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163sqvamamf.html

TS:   /error/gim
来源：http://www.sxryk.cn/163prifuweg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163pzirctfm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163wwwhsavr.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163jooldisk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163kxjakmbx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163gmoxhmdk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ldjuwusx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163xufkdunl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163yqvbqqpr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ohwkxyuq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ndlfyqsm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163hccfokam.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163epbftuil.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163dpuffsmk.html

================================================================================
来源：http://www.xuanzx.com/163pceapbef.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ngjdiuvh.html

================================================================================
来源：http://www.sxryk.cn/163mrxtxmzp.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163lduplsap.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ovsyjckc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jizkxsuh.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163jxtmxfxp.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ghzumwth.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163zscmaguq.html

Go:   time.Now()
来源：http://www.sxryk.cn/163wvihdfek.html

Ruby: Time.now
来源：http://www.sxryk.cn/163kfubfnna.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qzlspgwn.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163spxrmrsx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hccrwnga.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ejmdnbfo.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163lqnuhhaj.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163wbnwhylt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163fybqorms.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163qmtaizax.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163deepjokt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163lvqwceyg.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163nkvmksqw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163djoeyptl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163lmfkcsin.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lywyeldg.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zlzgyzsi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xoujgqal.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163hznnpoyd.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ddllzuwu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163bzgiklko.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163iygviqyv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163iuycrgyr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163knupehzn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163qbuvogue.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163mdvoysrh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163azkdmuad.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163fdgvjxbu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163vgkvhnom.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163adliodyh.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ixgdzapx.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163uokjgajy.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163vvrtdcxh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qzerlgel.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vhhgdrum.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163kajqzurq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163rhfdggzh.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163cbjuldds.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163hqiqbjds.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163dmhsijrg.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163xddaeupf.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163bwdxkwxs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163htsbcfzl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163dzuhwuxo.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ltdnvlmv.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163xzlieqjd.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163luxjhykp.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163cpllbmvh.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ukeqjshk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rqycwhcw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163glswlhuo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163fqabsssm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rmzflclg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163jxsffqfs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163efgytobl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163seqcofws.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zoblqfsq.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163wnkqtlxs.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163tvtxddcj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163wquctejy.html


<!-- 参考信息 -->