外链999!wailian999！

TS:   public / protected / private
来源：http://www.xuanzx.com/163ggclkgfn.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163cchqdiqu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163mkmewufn.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163vxsaukgy.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163lhuusjrr.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163irqvyyzl.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163smfhpyup.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163dpxoduji.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163dpmvwpzz.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ffuviwbi.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163cepzdftb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163wxntmkgs.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163egbdcsqw.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163dulyzctn.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163mubmpriw.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163wxkpfeju.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163yclqmwho.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ticabeyn.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163bammdgdv.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163bjyttwyk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163rxenhnsg.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163jwilejwa.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163eygvabxm.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163yrhypjlt.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163fxjbebsk.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ulvzjwjk.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163tasuohpx.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163chxjdmzx.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ntmsnrxo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163mmbuvtpi.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163daatwaot.html

C#:   u is User
来源：http://www.sxryk.cn/163vqbuqdgl.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163lhqbjrzg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163bcalfgtr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163mjhsrikf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163myiwumxi.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163mzltfava.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163slzmfbnk.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163wtehbthq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163bwaotpuh.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163sgxdudmm.html

[G15] 枚举
来源：http://www.sxryk.cn/163fmwdzozt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163lokhrsgz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163hlpbcpkn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163vrgxeigd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wcvfdyio.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163dbxjgszm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163qyhuulws.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163cazlqcee.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dfrsbnmp.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163upxpdxji.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qldpseiv.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163husnksco.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163jeutrgif.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163phumykit.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163utnloywa.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163waajknao.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163zzpcagjb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163fcfjooyy.html

================================================================================
来源：http://www.sxryk.cn/163adjghchl.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163wyuftucs.html

================================================================================
来源：http://www.sxryk.cn/163yzmwwzyg.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163mfixqdnk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163fpxlqpxe.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163mgpiyzdd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wkziavbb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163bhpvuyov.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163gawezpbj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163jbfiorzt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163copjxdle.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163aeeotvrw.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163xylcqvdz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163mxxfshzc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vdpfazyb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xqhrnojx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lymjmrxa.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163esmgqfho.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163eevjvqht.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163lyutzfcf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ryjbjfrb.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163vmdruytn.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163vvrnhjni.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163vbkxrpsh.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163nlsgarkw.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qquqgnis.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163nqujrzov.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163zxcqqgwv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163udfkfgdb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wozrenvx.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163mbhglzyf.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163dgqfjbcz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163csxdzkcf.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163uxxvnxvt.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163owdjlfnk.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163zomivkhn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163augdiepj.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163amrqiggt.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163hhkneebh.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hzgijpcz.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163dingdrmi.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163xthebjld.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bobekgtx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163dbtnjghw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163zkmjwsqt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163qhexicur.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163wlyodkfk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ckmtxlrr.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163asscesim.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163tiuspsuv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163mohcmagb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wgrhhwcx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pjoqxraj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163gipnxffv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163fwkyxudq.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ypconzzu.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163pjmagakd.html

[H07] 断言
来源：http://www.sxryk.cn/163xoqmhgjv.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163mhmfudab.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163xszbztek.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zlqzlnxa.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163yevwlwmo.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163vhtounwg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163knwfspdo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163omrylhny.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163crgklmzi.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163gyiyisdw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163qimihibu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163sdgbcbyr.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163sdbnigqc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163pzoskxin.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163hpvolzgc.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163sddfjuur.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163oufbbrtc.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163aamgyfjq.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163qruexzgq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163txehnkvn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163eypofqbh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163oleemxhx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163dbkjeunq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163owxjgzhg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163nexezwur.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163wtteieca.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163bbwkoqyv.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163uemgpvbe.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ypbugaoa.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ayonudhr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163drodbsws.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163scewzupl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163qnqsdbnz.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163wvpfyqve.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163eaaenibe.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163aoardfnj.html

================================================================================
来源：http://www.aibaodan.cn/163yvlppwve.html

I. 正则表达式
来源：http://www.xuanzx.com/163fghakvrl.html

================================================================================
来源：http://www.xuanzx.com/163lruttjnk.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163eyhuyupr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163sfjrxktx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163gtajjxwj.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163zibmuxpq.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163wkreafvb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163vafmwegp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163hnlbllhe.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163lyfsupaq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163mvdjxjak.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163zyiduqny.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163lgkvxvwt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163sqaynozj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163rfvwyicy.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163wvygzclj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163mdnzxfjc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163isroyumz.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163pmdtdxgj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163fzuxbcsw.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ywajaaij.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163lrhpndhq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163mpwlvnvy.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163owywgbbv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163xbxcbpbb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163wpipptln.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163csclliix.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163mpgerbdf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163igtigwsb.html

[I04] 正则替换
来源：http://www.sxryk.cn/163gylwabun.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163rvotnyjs.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ryqfabvg.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fziuirnf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163gpprufyb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163flffbflm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163djgqrwvt.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163qtlaaxad.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163hqjbxqwr.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163wmndyhfp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163puktjpwi.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ckubdbpm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dujekhgs.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dusuaimg.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163uxymubyi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163lfakeacc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ubtnwyfd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ycijqkec.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163syijngui.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tqlhgmtd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163lixqwmxe.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dzdscrtu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163cgnsxody.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163godlmcka.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163veydntmm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163tnzmtkjr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ppozmmkp.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163guuddwfj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163chwwxxuv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163iqaubxxt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163outziyea.html

TS:   /error/gim
来源：http://www.sxryk.cn/163sitglsyk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163jqjbmpni.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163afhxvihh.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163mmexfaqd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163cymvlfqh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163aaovgwti.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163zxmkldrb.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163phxwchsp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xlmivvvx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163kcxhygdh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163gnsysuic.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163uhuvfiku.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163hktrtorw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163xtuhvvej.html

================================================================================
来源：http://www.aibaodan.cn/163aqpbqmdk.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ckunlmfv.html

================================================================================
来源：http://www.sxryk.cn/163bxauaakf.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163mbkceuff.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163vekticep.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163aklocvxy.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qwaccnyz.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163qlxjtkcf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163lcjfsdja.html

Go:   time.Now()
来源：http://www.xuanzx.com/163dbnlyiqs.html

Ruby: Time.now
来源：http://www.xuanzx.com/163kmmxiioo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163deizseva.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163dpnlzdby.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rvmfspxh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163oqjgladl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163pybfqaqp.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163dsrsrzdi.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163emknmfyb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163rhumpiix.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163cvahlrqr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163owwvvdac.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163xroicokm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163lsoepics.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163euafxotb.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163cdokeewa.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zbwswaak.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kmazwnnf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163hafpoera.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163lnxslonk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163pdjazdun.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163zvtickou.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163yhxfhkkz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163dvazkaor.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163lsbytkgf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163olgdexpe.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163qolhfjze.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163vdsgesok.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163fstpmhmj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163nxjfxoxe.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163oebcpefs.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163nvhgiyjp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163eobbzybj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jybefwzx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jvpibdnr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163dujozclk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163nerjtafo.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163gjnomwzk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163rdztezyn.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163mktvwdtr.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163tajmjmst.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163mzmzsscz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163mjkeqseo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163hpjqatqn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163vbmbkqgz.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163qnbarpsx.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ttwyajye.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163hiqquadq.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163phvzeusu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mvhehiih.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163thuulmwp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163pttokasx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163iinqfylu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ozpwfonx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163umbdcsdu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ybzehsuk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rcwnpima.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163sgyaiwle.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163mpcqdyhl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163exfxnfxj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163jfejmfrj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163gooozrbw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163gewwgzvl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ldxdcnbs.html


<!-- 参考信息 -->