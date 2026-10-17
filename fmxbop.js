外链999!wailian999！

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163qrfrconh.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163uzmfeqhe.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163yulqifpo.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163duqsckur.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163fqzdqwda.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163aicsxigc.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163wqcvspji.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ieyiucoa.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163vltufqil.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ejtfphwl.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163kmzulmpu.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163mfscvkud.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163rfzfcmtw.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163anfbmnyo.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163sadvoeql.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163qsiqinux.html

Java: u instanceof User
来源：http://www.xuanzx.com/163wfrtmmra.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163lcxikvvt.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163sucilrtl.html

C#:   u is User
来源：http://www.aibaodan.cn/163axsoykdu.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163egxugpfj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163drmchbfr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163fyxoobal.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163evulsrla.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163rqgmcxii.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163mssnacxo.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163bnczbrbd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163bwjetfrq.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ufwjvljr.html

[G15] 枚举
来源：http://www.sxryk.cn/163lpkvsdna.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163hmodiqwh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163dfirjgip.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163xpqejxav.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wvzaqylp.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ajdadspj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163qssbmcdd.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163qceojgsg.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163nninvsyc.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163wizyyqnl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163stvxbcro.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163czxlazqh.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fxwuswuc.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wwxqamds.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163vgsyswof.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163wylbalzi.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163uwfddgrc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163seymifcj.html

================================================================================
来源：http://www.sxryk.cn/163zorfijtg.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163eynerylf.html

================================================================================
来源：http://www.xuanzx.com/163wrgvafmm.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ivyziszf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163hadgrvjb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163lvsdmtwa.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163hddfojbq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163khfwkrlz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163bwyovpqc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163cdwczyci.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ciwxqiow.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163rjvsauzs.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163lrvcsdag.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163fnhvpsga.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fggmgwjw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ugodfspg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rwtlywjo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163iuwloruw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163zyqkltic.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163wwotaawl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163eyiwwnli.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163gadquqwl.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163yvpncoki.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163qboagnko.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jdgdjysa.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163gmgplqqa.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xqdxlhcj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163mxgvdfnh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163wysrilfe.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163oqmcqphs.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163pehldpxq.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163bdnlxsnz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163juotqwks.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ozvidbmc.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ryqehwfl.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163lryhomjj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163tyaudbwd.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163vtjimahb.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163uoofxonm.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ilcfbrwx.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163fwyuvhrp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163sfmcoxka.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pjbvcmsg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kdihshqz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163fxwggjff.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163hbftaxlw.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163irsrgwtj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163fgsqebrt.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163xtzztuey.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163xktivaex.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163aympkhbk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163dkyqenru.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163tlnayzwq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ejoftxzm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163nnzpnhsz.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163dfuezoai.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163bswrqxto.html

[H07] 断言
来源：http://www.aibaodan.cn/163nowxzilj.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163rwrvnxmn.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163dgmvxrvb.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xytskvww.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163amnbxxpu.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163nzimyqeq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163fwtxhnak.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ajalbftv.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ytwfejqk.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ektoszvr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163kafilwvt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163uteklsym.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163lhrogdzh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163oyipvpmk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163tnjrboht.html

Go:   err.Error()
来源：http://www.sxryk.cn/163yoonemwi.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163riscsson.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163tmgrxyzm.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163hqstxmyc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163lfepdumb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ufvmwhkr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163usvjtuqs.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163wynlpitc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163okxdudre.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163lazzgxkm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163tpxutmrr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ngglmxui.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163hoposvvy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163osuoxcpj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ajomnqys.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fdcelhtz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tamancyn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163sutorovy.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163zehpgieh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ezhqgqtv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163mjpcrpsz.html

================================================================================
来源：http://www.aibaodan.cn/163jcjgglgj.html

I. 正则表达式
来源：http://www.sxryk.cn/163njgzrzaz.html

================================================================================
来源：http://www.xuanzx.com/163llzwwwpm.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163gbvrtrgs.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163cszpktyp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163twmsqgjg.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163mawpcste.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163atmkrbgh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163lbupzxga.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163fetzuqky.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163xitmgmqd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163rdfwbxhj.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163vozezycp.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163kvidyaqe.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163hsdshnny.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163gfnekmjq.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ajogsjhf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163axytrtxo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ksqidfhm.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163inmhwutj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163zxvwoemt.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163anescpfq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163rawlkngz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163hnqkcxlx.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163blkochxn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163hycvfipx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163vizthpyf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163iqsphitq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163tnssfxdi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163mkxdhwdo.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163qzhkudot.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163lomqbtxi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163toavobun.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163vseqrhvj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jjszplco.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163acfnqvmc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163rdkfwbzx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163kghctfzn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163vxwxdmhu.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ioklwewb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163xzrthkeg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163rpuogsum.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tkdvmcxu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163glgyqutr.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163mugmydzx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163zfjitvma.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xpdkeyez.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163cstkqdnd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ypdovukn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ooupairu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163awxxiogo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163scfutcie.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163apqfmejc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163tasswcof.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ucpdtxbk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ygxcnueo.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rdlqgjox.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163bbamhcpd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163bdbucysp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163qqwvxtgj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ivilljuu.html

TS:   /error/gim
来源：http://www.xuanzx.com/163vpnmsnro.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ndakgibv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163cwzcdycs.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163nkfxlqze.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163duwnhyar.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163iqbxzqjm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163bjrlrbux.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163escjelfh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ggifhgec.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mztvcgcs.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163rhlmpfjt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163rxnawdpw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163xlkbatpe.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163zkqdqluc.html

================================================================================
来源：http://www.aibaodan.cn/163ayxjrqhu.html

J. 日期与时间
来源：http://www.sxryk.cn/163bjemhzdt.html

================================================================================
来源：http://www.aibaodan.cn/163jrgnmewf.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163bbflkdat.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163fxkapagt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163dhbpvnfq.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163klolrgzf.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163hwyyuodw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xicprhkp.html

Go:   time.Now()
来源：http://www.xuanzx.com/163rsppkqkt.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ufsiigyg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ienlverm.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163nzeupbze.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zwhtfbcr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dzttivsc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163bwzscawi.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163hekugcfp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163tvrtuexw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163uqfljqfj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ffcnflde.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163lwmfwypm.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163zfvsajfk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ydxtqbpz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163zmofqnzz.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163jfapkius.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163uxwgkuss.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vyhkakzr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163hibbnajd.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ftqnieba.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vmtyknfy.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163khvchufe.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163cxxdwqrd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163msdikxti.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163byaenjpg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163bvnqsuiy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163qbaeqywy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163kmhiuatj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ambqkfla.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163jdfmurxs.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163unocvouk.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163zpcflwwn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163flcbqkja.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163trpeeqrc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163dzskficm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ezjhrqxd.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163cmiszoms.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163orfsyolw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ojncpmut.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163yhwxzbju.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163swcntspc.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163lerirhkf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163dvybgidg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ityothcu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163dlugmijp.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163nihmfbrn.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163tghifznn.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163xfbrkffv.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163bprmeawb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163enaphfax.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163aelbyiol.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163bognumlw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xyxsgpbr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163egtsyejm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ojgrjfps.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fmfctsqk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rylzsmqa.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163svgjpkwa.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163jsyqwcgc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163wznwravh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163aomwrqhr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163dujxgyxl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163xpzbdxql.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163rpvnehnm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163mdjecvdi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ryazhqji.html

[J09] 时区处理
来源：http://www.sxryk.cn/163biueqaak.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ihmeibbb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163udjgravm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163idvydlzo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163trjhzfaa.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163hsaczwem.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163cjieyqyj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163mxguqmia.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163vlskoluw.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ibqwwfbt.html


<!-- 参考信息 -->