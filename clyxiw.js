外链999!wailian999！

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163twkwlkvm.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163irttgqgr.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163qphjixby.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163jzyoecem.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163reqsblnm.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163eywjqjzj.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163moeqvacg.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163yerlqmtu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163spdjledo.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163fmrouzpv.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163aqjbnnjj.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163gsdgofac.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163cjyucfnj.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163keyafukg.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ccjnxyhx.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163vijttnad.html

Java: u instanceof User
来源：http://www.sxryk.cn/163alfhzdam.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ocokhfwl.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163rxqbzcwy.html

C#:   u is User
来源：http://www.sxryk.cn/163ihzyxmeb.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163nozksdrr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163hsiyovdl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163chuwbrrb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163hehvnnga.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163jphortnx.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163rpvlwxyb.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163oljwcbpi.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163kfkujfkb.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163gsgcrtpz.html

[G15] 枚举
来源：http://www.sxryk.cn/163ezwpbylw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ktyolaqa.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163fukdjqgs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163efwghvoz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ipalyhty.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163cesietve.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163isekwveh.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ioiwqtsf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163trawqmoh.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163mtyerknc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163esaeezpb.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ddjxfoeh.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jrefkofa.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tpmpyshy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ayaxsall.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163xxccjyth.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163sbdihqvl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163gagruchu.html

================================================================================
来源：http://www.sxryk.cn/163pjewwxom.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ohiywfvh.html

================================================================================
来源：http://www.xuanzx.com/163xvhrmyar.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ifwospjr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163fswirmfn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163vnpnflnp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163nexrzfva.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163humyjumj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163xwbnjcfl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ehcftisf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163jonvddqm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163vjavzhwy.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163rzylcfax.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163xtwskajo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ydtmbfen.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nrnwoxwa.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163etbefadb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ihjcnttb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163jrkonkhu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163scvrlgcc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163qkqjqptf.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163qsasgxsc.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163fsarkgoq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163lflvibjd.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ykwiebnf.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163detabhhf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kazywiwo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163qepuoaij.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ddcpoxzp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163spydjmoa.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163vbfyuvqo.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163phfnnikk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163eqretshd.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163dorvilgp.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kjzmnpow.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163egamzaqm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163xwobxfix.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163rvlrxthg.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ajzphgch.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163mgqqfqgt.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163dhnaiaqg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163whpvkpay.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ejbwoazq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163oppfdqfo.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163bwtskkch.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ebbcmgzp.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163vffhasnq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163remzcfzy.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163zkdtprlv.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163cuiqewec.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163csvdpszm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163kvzyifer.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163phmzlafq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163etalctaj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163hudlbofn.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163pixagniy.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163qpvldrxl.html

[H07] 断言
来源：http://www.aibaodan.cn/163hqicvhmq.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163irrwbgno.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163cbkeuqjv.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fznxjcdb.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163woibtdbw.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163wzspqruh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163neqdqtxf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163xvqcrmds.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163nftgewlu.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163mwrnjyng.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ommhmtok.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163phubqosf.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163yollppav.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163pzocjhes.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ctthgerd.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163hkqljzox.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163rimrtxiz.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163byqnuxnu.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ufbwcplf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163scimjzsw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163mujumnhd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163emaiwlpt.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163snsgvihj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163aoktufns.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163fonlyhfj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ekitsojn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ntdyxssj.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163xtixdqng.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163bexwjnpy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163txjisuht.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vwfxceeh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fqxxeool.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163jgudkjud.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163vkpxnlqq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163xtuanuwp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163jjkvwjnk.html

================================================================================
来源：http://www.xuanzx.com/163ckmwljhh.html

I. 正则表达式
来源：http://www.sxryk.cn/163wcmgqgry.html

================================================================================
来源：http://www.aibaodan.cn/163velqvnbm.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163jiukyxix.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163clsbavvr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163cknltnto.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163vuynyvgv.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tervkwro.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163wkqmilml.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163oenlmvoc.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163umslgmud.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163tdwcaicw.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163cyrtxnxz.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163vqfcpglf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163xgetkbjm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163hszpumbz.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163shlwjupi.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163rdvwdwjr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163gblozeiy.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163pbmcrjnt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163jawssjof.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163xgskfetp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163yghlwelt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163phywenal.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163cyronhqi.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163qudmxfdf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163tljlcjhk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163udgbyqie.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163rwyiabeg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163edcittbl.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ckofixrz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163oamynquq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ghmvswtp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dabicecy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fpzxsepw.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163knsrnpci.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163jglysffk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163nqnphewb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ppwvnobs.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163arjjmlto.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163zohetxzn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163mffggujp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fbwdeqdh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163geycrcvo.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163drgoiizw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ogmgxooz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xuqsnlxd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163vrbysmdm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163uofbqfvv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163akfzwsif.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163glgkoktu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163yeeqnfbo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163xdncotry.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163frguhxey.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163vzmmowxr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163znuvjxhd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163cgjdzyig.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163tptvqcsu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163sefgpbhv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163amfxqrjc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163piwcgimn.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ganditvp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163wjyggvrw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163rtrladdp.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163qlgjdjnj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163kuwfknge.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163zkxamwmq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163kxracmcg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163oqfchkwu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163kvhjhjvq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ccrczblx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163yfgqhivn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ljngvnnf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163orezwgvg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ccqkqxat.html

================================================================================
来源：http://www.aibaodan.cn/163agfyjxdd.html

J. 日期与时间
来源：http://www.xuanzx.com/163vwebtzzy.html

================================================================================
来源：http://www.sxryk.cn/163ehewekqs.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163uhwzoqfs.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163dyxjirhc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163kfwscact.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163bjyniwmp.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wjosvufm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163pijlejcm.html

Go:   time.Now()
来源：http://www.xuanzx.com/163uhsznzyc.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163dqzfounn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163jmjjtbhy.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163mulwjkdx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xmzccogi.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mouggfpz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163wtutsvci.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ywmmopac.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163wdhveuof.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163srqhojba.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tdjzcuui.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163xogfafco.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163yuglwrhm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163awcmmwab.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163uxvbesxs.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hchpoqrp.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rpziumux.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163yrasybkv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163agpckdkv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163aasbguds.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163urefsjtc.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ukphwoic.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163avuaaanc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163xukhjfmk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163bqsieamh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163wzjatlxt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163hwxjvysj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163zjlianln.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ukjxehgb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163tgtwoejb.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163gpnvbslp.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163jecqvscr.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163ekqdxabt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hpejqrnn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163gvgquxfn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163wqhjreeb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163vtjqcsez.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163hbctcuux.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163fuyifexy.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ilfkdugs.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163xznzfubx.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163lmivfwdk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163mkvxncfl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163hsmzkryb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163weazhcmx.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163objclksi.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163viyhhazh.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ujsceeqk.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ipxlkjsm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dtbsdeeb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163dnabghqp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163kkopsrzr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163pxzalixr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163gszrbide.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163epltcumb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wcvimnuv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ycmkbnyy.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mjubxzkl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163mqxecmgs.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163utnsbvud.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163cgdpnjse.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163atraouve.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163atfuqfug.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163zlbtnbtb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163nsdmbzab.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163lnmlcydt.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163awugffpk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163rfepekfu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163hfchlalj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163oosubype.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163kmtbhwrj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163jzmdagkr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163mudtxast.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163hyvzphvg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163fwswimft.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163jqtkdicz.html


<!-- 参考信息 -->