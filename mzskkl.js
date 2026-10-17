外链999!wailian999！

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163lfyduzlq.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163dfudzuju.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163mycpjhvo.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163iapivfmb.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ctaqccwt.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163xpmfxhks.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163jcodkifg.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163bdxohckl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163arlenmmd.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ophofumk.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163fnjkzeex.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163dkfokcwr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163htviaepp.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163zqkhtttq.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163gasmangw.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163tceohxsn.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163gqnebhsy.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163gywdgpky.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163laouyytj.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163kywkjoxs.html

Java: u instanceof User
来源：http://www.sxryk.cn/163mwuprcnq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163rblbjqxu.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163xonhpoqp.html

C#:   u is User
来源：http://www.aibaodan.cn/163xgsdynbc.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163pzamkoyd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163hmlpkbbr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ltsravdw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163oqgyhsrd.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ptmoeqqh.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163tuosmazz.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163awjdupmm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163rwznymzt.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163rggdtcaa.html

[G15] 枚举
来源：http://www.aibaodan.cn/163apkkdtax.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163icmebzgq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163qqhtbqfw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163abmcrbrj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hwnwnhrf.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163wryuxjqh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163cosoufqu.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163buugnbfn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ytthacsl.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163futoxjfc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163tpbsghfv.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163smopzwot.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163cbyrozme.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tfjdoiec.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163rrzwalet.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163vmbjwmyq.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xifmjqtj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163jcsdnxnr.html

================================================================================
来源：http://www.xuanzx.com/163cnpiptrn.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163kcaekisn.html

================================================================================
来源：http://www.xuanzx.com/163ttpuozul.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163lgpbuqzg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163jbuvysll.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163xvxseyxw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163zzinyyom.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163miaifkoi.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163aaumqhxf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163zohplcat.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163btzcfrwa.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163rsnhxjyv.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163oovczttu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163auqffgih.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vkhlayuy.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rjpwdynz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rajjjqmn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zlvamgbn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163yzirvfmf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163skxwnjvv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163qyrvuvcj.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163fbmsduvy.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163trpvhnlu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163opxuymac.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163njumoped.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163apbokxkg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163soenuphb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163onkgjpgx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163yzfyybry.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163nhyrkdzt.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163jgggknqs.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163wlsexlvr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163nanbgekg.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gkihesrx.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163nwzoemlu.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163tuziimwj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163hjpkjnqn.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163lzbbusxp.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163qmzqdzcg.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163mqnnlllm.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163uwxbkwvj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163bkmreqnp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ffguqnmf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kcofxrdn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163hzendziw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163svhpvixj.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163vcvsacpq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163umfptgmd.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163fejojlmr.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163lickimds.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163nnwckoit.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163mtbzmbcs.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ubvrrxfk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163woqqitgl.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163juulylti.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163lvvnbrlo.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163cnmqtvtf.html

[H07] 断言
来源：http://www.xuanzx.com/163nbvevgfd.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ocpnsxig.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163isvmatvj.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163kdynyrsx.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rldrwykl.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163fpttuzqy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163tjagnttf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163zxiqhtfv.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163izqzmrlf.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163hohucomz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163fqcvadfn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163tbknyips.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163klgvtqmp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163eopyqtjb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163tmzsemdr.html

Go:   err.Error()
来源：http://www.xuanzx.com/163vpybqgrx.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163gfakiiuh.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163lfccrzjy.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163setdcvxr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ktidzmxe.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ozaauddw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163wiaimzrx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163tzadweho.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163blxkwadw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163rbrlgwkr.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163gmwhtwgm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163bhcaynio.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163toqhlciy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163krxgoqsb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163sxjxejac.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163pwwjgfje.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vqzmbxhi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163stiahlcc.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163tzjbiunw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163nacwojol.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163vawjfevf.html

================================================================================
来源：http://www.aibaodan.cn/163ltircuxz.html

I. 正则表达式
来源：http://www.xuanzx.com/163dvdslgdw.html

================================================================================
来源：http://www.xuanzx.com/163zdcbdvdx.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163etsrfgoe.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163mhewhaki.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163qvmvtqwe.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lzzjftft.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163gmlxojnz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163lmqtitrb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163uvyafdhp.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163kjzzrsfk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163tpcezcrd.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163uekczkip.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163oscvwslt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163jojqmkua.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163vhlitehk.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163mcivuhbm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163mnlscfcg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163eillkewy.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163etqnahdo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163itvfmmuk.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163xqpdyukm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163kghmfeki.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163acvouldr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163pwwbkdwd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163egtiqifj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163tsvcoqen.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163zukowuzf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163fcuxsstm.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163vlkmprvl.html

[I04] 正则替换
来源：http://www.sxryk.cn/163hxnszxqh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163iopplyzm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163aewzoafr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163nhqwydmo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rcndeuok.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163qikozleo.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163gjfzprqu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163qofwmnez.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163gqefapfd.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ycycnkcc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163wrzvhbxw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163gkcpyflz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zmeunype.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163dqmkeuut.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163yxxmybfx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163bkuiclwq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163szwsbqdr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ckcqgkkq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163cqzaazbc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ewfczznn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163dldwvfyx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163jfoluptl.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163zsnhmknh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163fjbiyjoq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163mpnzrfid.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163fhtauslt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163uaqmbert.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163asvejggn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163nwqngqcn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163bmheewnd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163fpxarxxv.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163kklozjeh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ndahzjcs.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163bsjlxygn.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ulrqxelw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163dmpzwame.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163jsmmhyon.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163pxunfele.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ejafpdgo.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mbllthcl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vtwcekfj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163suajmjbs.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163uumdqlsp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163zcagehps.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163znrpcsym.html

================================================================================
来源：http://www.aibaodan.cn/163ctlkwjnf.html

J. 日期与时间
来源：http://www.aibaodan.cn/163cglrtkvx.html

================================================================================
来源：http://www.xuanzx.com/163zilaqhbn.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163qzfexsza.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163obsooerj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qizjpoqq.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163eutukmfh.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163mpnpidzs.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163uewcmufk.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163dgezjpgs.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163bunxqnzx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163fgijqcxh.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ruvendzf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163yqztqtfs.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vobmwadl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163dvgghlte.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163thmeslyz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163xoixytrm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163wogapvoe.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163dgfctdyz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163trohwmzk.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163vamdvgiu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163zpntlvia.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163pdunvzej.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163anycnugv.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xvpgsorp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ueunebkw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163bjudoiyt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ymvmsvwo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163riahryyw.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163lpfxqazc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163evynxmdk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163acetjydq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163szywrtbj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163btcnyflr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163enlxmxbp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163wjcmvkui.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163kmkpouvb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163jjuciaku.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163sruhwzar.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163prsnycjt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163hakuazqf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kqfdrcis.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163vsbkuved.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163mtkpymlx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163wbbqpose.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ynknzhww.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163zsiutlgi.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163twlpoilu.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163dnudhtty.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163hxypbmdy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163mpyiyvcf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163euwfwpjh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163cvuhlxxy.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163koklezbf.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vygfwyqs.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163uosuptnh.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163abfpyxwc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qkgulhoc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ugcmxfio.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ynvaslwv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163qlprbghx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163lmkrbuaz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163aqnixsut.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ukucvqiz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qqwpzdae.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163vpwqvcmb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163dyhcvpaf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163mnnvsiku.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163naqegnbu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163mjjfiaip.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ztshwtmn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163rgibuxql.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163gnvjasli.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163hrcuvfgo.html

[J09] 时区处理
来源：http://www.xuanzx.com/163bxhyuhce.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163lnrlvwdd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163jeeulbry.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163bqusbney.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163dyfrqzdt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ktyhepwg.html


<!-- 参考信息 -->