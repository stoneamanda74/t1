外链999!wailian999！

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163tiexsnhc.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163nnnyijfr.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163zkcemqpn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163nehvwzsz.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163yigmkpvo.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163erjvxyyx.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163jqliydyr.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163omofgogi.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163snwbyobm.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163vbzxicuo.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163hgqaqano.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ccshfzct.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163viiddxmu.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163quvkmeoh.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163pxlgqyqh.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163kwlzhxyw.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163guerdtmb.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163spslrnmo.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163mqnzcxag.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163kfrizkoi.html

Java: u instanceof User
来源：http://www.xuanzx.com/163tdvmfwko.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163gmojtpjy.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163jdkecpnh.html

C#:   u is User
来源：http://www.sxryk.cn/163gkwehumh.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ntsafaqh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163rsdijdfe.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163uqztctny.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163karsmnnw.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163qlslsgmv.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163stewqlyq.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163saaxmlva.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163xttrdwud.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163jnxjpung.html

[G15] 枚举
来源：http://www.xuanzx.com/163iprdqxek.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ysfiqilh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163uolhchdz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ebxnreta.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163cxypunpg.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163icgmazyd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163itskeqoh.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163bjpkjqiy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ltqwaulk.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163apolyvft.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163tdlqealt.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163vlyaisma.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163hdpwjkgo.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163omwhqtkb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163hnvygabi.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163xzklcebw.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163mpyetlof.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163oyndwmsc.html

================================================================================
来源：http://www.sxryk.cn/163mcwidejl.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163zxihfjhu.html

================================================================================
来源：http://www.aibaodan.cn/163mpxiznvy.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163gtidsjke.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163nigvhdmh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163dnedvssh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163npudzpkk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163hsuejkvn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163uftzggud.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163cfsrqhmf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ywqafjtc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163sxaqsixi.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163xuivoequ.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ahwmwmff.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pcueqasp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163efltvske.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uwamintu.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wkhqoger.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163jekelvtk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ltgmthqr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163tzygedqw.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163okxzprru.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163cfniauqm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ggtvodpy.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163tekcefeb.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pzazgudn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163oujvatyn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ehkvuofb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163hhstklag.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163osbnnkrb.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163iujehfyp.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163vrgpxokd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163lszmpjak.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163nkzrtrqh.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gfsfrsnw.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163imcluzrc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163alpfivuc.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ruyhwjpk.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163lidbqbxc.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163wkjtsivp.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163qojpkyjb.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163mhthhtyx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163cbcaxost.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163zzuwvwdd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163odlqwikp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163pailabqr.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163jbkhtlyu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163gzxgntva.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163lsfjctxe.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163gxwgrvaq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163rmvkwycj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163nlgqgabs.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163casiojsn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163fwgmzirs.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163qavyqfcr.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163lvtwhxaw.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163zufqxcia.html

[H07] 断言
来源：http://www.xuanzx.com/163ptoglnnu.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163mwlnhyqi.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163olmrzwgi.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163fnjijgnm.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gvbhiofo.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163jdppentq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163hksoljaj.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163autaomvi.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163kvnueypt.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163fykpzdau.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163agokurcx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163rqnczowl.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163lbbbmxrs.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163unhmerub.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163lasgcmzw.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163pranjyou.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163tdfbmftc.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163twxstpoa.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163contpvtd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ixmvmrez.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163uiugkzip.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ujztzagh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163qbulqelk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163fqgwiqtl.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163cotiboyw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163tjlcbxnu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163nzkcfvgf.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163apzaaldq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163vjqnsaku.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163bqbwyuwn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ebdmappe.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163yepowzlv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ghfsokqh.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ujyezgnr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ozkgewyz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163xzfnzdra.html

================================================================================
来源：http://www.xuanzx.com/163bgbhzipz.html

I. 正则表达式
来源：http://www.sxryk.cn/163gqqtolxv.html

================================================================================
来源：http://www.aibaodan.cn/163oseenbyz.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163uwzlubfr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ululylrp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163fsjlrizs.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lrwkymtr.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163wvgpovpz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163zwcmubxi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163aszeyesn.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163tvhywjnu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163epyytmme.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163awfgjukq.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163cmehkary.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163fxjydzmg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ndqpqjkn.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163tcqppnph.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163qfmccdwm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163wnxtryzp.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163lcxrcskv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163boyxpwsc.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163isruapzq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163lsfvevvr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163orrsqizk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ttdmrzmu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163kdmbexjo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163sjmrjhph.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163drnhiujj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ybagmbpy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163uzfjtyli.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163sjuhtbms.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163lxkozoit.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163jaujdmsa.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163hglksrdi.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jkzoiuju.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163umecsfag.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163xizrsrxf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163teeyazbh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163xknwfnxj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163rpgoabnc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163uyzthuqq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163izdffzuv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jdujbhyi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ugyovvrq.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163qhhfjdhb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163qyefsptq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163odmwbuko.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163pxnzygmf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ioejidwu.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163nfmldjjl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163kuxehgbq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qbwezamr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163hhuijvop.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163axnpamuq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163koeqnoho.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163xqvsyxql.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163phoxojgy.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163chzcwnls.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163eoutcnho.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163bavegfug.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163nbfnoruj.html

TS:   /error/gim
来源：http://www.sxryk.cn/163eylisukf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163eroligjm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163vqkvcdfk.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163mhjcxljy.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163grgxpdiv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163mqiqmxda.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163lxbzmfbe.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163fjztdowy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vsgpijce.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163nijvsxez.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163vaqetvru.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163sgzxflal.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163bpnnjjue.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ytsgczvb.html

================================================================================
来源：http://www.xuanzx.com/163jicouvzv.html

J. 日期与时间
来源：http://www.aibaodan.cn/163jyhakvcw.html

================================================================================
来源：http://www.sxryk.cn/163efbmrqwx.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163tsitjawa.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163wdzywqlx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163pmmeomso.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bzbhdsqx.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163yqvaazjp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163dsinaype.html

Go:   time.Now()
来源：http://www.xuanzx.com/163lpatqnsy.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163zryaavtv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qoanlfyo.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163bpvgnpix.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163gprdthhj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ehbjixaf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163gtgljbeh.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163nndfnhgs.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ukmarscy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163znzionae.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163bwqgglfp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163wgvskmqv.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ohyjlahq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163blxcydge.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163kxiapjiz.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163dxwnjtoo.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xinsqdnq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163rtqruvtl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163kckfgshp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163aegrslhx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163qyrqcrls.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ozwjbnng.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163asvgylzp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163psdwmqsl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163xuqveimx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163zbvcthev.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163bonautbf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163sjwblfdl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163fuzkbmfh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163pauiouyf.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163bdzbxdud.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ykbvcccm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163retooemb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lyarijfa.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163yvficqpi.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163jjzatzge.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163opgfjkep.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ixiaugan.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163wkygjkks.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ubagcbbt.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163kpxvxpkk.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163hazizwlm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163jzznjeci.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ylmxnywe.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163xibhaiao.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163oxwyfsny.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163bxnvkclh.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163zlphuooq.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ekvdypcn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lacowdly.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163foxwonsi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163dsfxlnkd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163htuntgzg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163gsjpcesr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163sllirbbx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163yxkrgmib.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fkfsagqh.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163gfzpafep.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163pilzvbaq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163udbrngfy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163uwychnde.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163zejdbpap.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163hldoptie.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163jgnylapr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163bovidgks.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163mdpouhgd.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163iuoonzkp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163fxofvacr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163epqowdju.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qrvnhxpv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163pugkfiop.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163kpkefeqw.html


<!-- 参考信息 -->