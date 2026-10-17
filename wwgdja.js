外链999!wailian999！

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163rvvpiszj.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163utfkuvlo.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163xmmodokv.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163xsilasek.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163sshkslru.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163cxuxgoir.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163cnygeokm.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163clcifbgr.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163dnwhbudd.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163holowmuj.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163dyywtczh.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163errmsiit.html

Java: u instanceof User
来源：http://www.xuanzx.com/163cpwqiohi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163kyggfdji.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163tnwkspzv.html

C#:   u is User
来源：http://www.xuanzx.com/163vyyushjc.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163chfrliuq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163rrrpvccq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163kdqgeosm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163xpcchtbo.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163dkwgmnji.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163fojhkmpw.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163topyxqhi.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ftrduuun.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163cgljlihj.html

[G15] 枚举
来源：http://www.sxryk.cn/163ervtuche.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163uvdejqvs.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163qwrdnznf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163jltmytaf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163kodhaphm.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163cqskrswr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163hpfvxymq.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ibpoaaes.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163easdbvov.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163zgqfsnpx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163tmkglric.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163sysjitss.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mincfnut.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vxvhauyz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163qoxsfoyk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163jzhiaabf.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163vupdwsjr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163kdlwqskz.html

================================================================================
来源：http://www.aibaodan.cn/163wotzvdfp.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163tybgzilz.html

================================================================================
来源：http://www.aibaodan.cn/163yjmmsfok.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163bplogzwc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163dzjkkkoa.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163riqnwlmw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163cyvalawo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163zpmrcdtl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163qkevxebz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163lljiluas.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ldmpwrtx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163jkxaajln.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163wubrrtsz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ugfgyvmi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zcnnuvls.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ecudnyku.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zksvwkue.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rlclztyf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163kqgmsqwe.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163mywtlylk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163bhnnhuil.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163nznjoxmv.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163rdeekcjq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163imlsvpoy.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163widldfxe.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163iqsglafb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qjxtahtg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163jnxjlmrg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163wkaifihy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163djumhlin.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163fsfbkdmr.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163eupchsxc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163snxybhmj.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163usjderku.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163xloqovlo.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163eyjijyhi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163hhvupxdy.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163pmlhqrsk.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163jswgrrui.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ggfysmma.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163uldsnbua.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163jtzzxcbp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163guosmiif.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163fiuixxfa.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163qocgtxhu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163jykqbjwx.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163pwrefvai.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163byudnoek.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163rcmexpgu.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163mwepbjqv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163gmrqyacx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ilfhffjw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163typkkxak.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163marhelci.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163esrwrxdl.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163xkdipxqs.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163crhraiih.html

[H07] 断言
来源：http://www.xuanzx.com/163rsvqqrpw.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163gdmhmoob.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163qtmofnnu.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163rimbnopn.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163hvkttmjk.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163mpmnfalv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qzenyzvs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163fyctrrba.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163wpixxomb.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ijsbwopy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163dtvnestw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163wgjgfixh.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163vfvcpwst.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163xqrnmiku.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163qakadsov.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163qtjnpmet.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163yilzuvjp.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163bdyonylm.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163rcdavumn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163vhjvqkgt.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163jdxciawx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ueejuldj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163hyjvntkk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163uxjwacds.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163tnzeuiyv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ihzxiakn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163mqisizyw.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163oucbblok.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163eqidtgkc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163vakktbbw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jjbngzzm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163obnvqpco.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163zsmcafaf.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163yqbcbpzy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163pevutsra.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163isropfte.html

================================================================================
来源：http://www.aibaodan.cn/163izhwwdpe.html

I. 正则表达式
来源：http://www.sxryk.cn/163flbxyxgs.html

================================================================================
来源：http://www.sxryk.cn/163meqoroap.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163felbgoip.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163sepqjwwn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163dvlwquat.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163pfusxzma.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163okcrixre.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163cbeqowaq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163tbyoslme.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163cdvxgebk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163gdumwkuo.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163kudrsxgd.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163khnbqdfd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163vzznobwq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163blosmknr.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163jmlzgigd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163xxilnlyl.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163mrdqmffe.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163aivoepoa.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163khptpgre.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163nehlbhvb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163iirwbndh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163sogiawal.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163wfdcqkeu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163oaatrhfv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163vtttsjon.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163siuxaoqx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163euwwojgh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163dvzgxbwa.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163vkdonabw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163bzqndbmu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163dpixiqyv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163nbbzhmob.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ntwviorl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163smkjmixw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163kwvzabji.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163niewkxyw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163mwkyylmf.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163xevutzsu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163jyrsoxox.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163eyklgpkn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163laufjhbr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rkyaqvru.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163kvoreuue.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163dcfdwkww.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gnjpltrd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163dqphtemr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163fodvranf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163akzmvfyy.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163rzqrcgam.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163evjelbpj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163vgldgbpv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163gxiwovij.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163rcldclke.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163anzheogn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ffnxbrta.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163qznluwau.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163lqqnjpqv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163zsbbzurj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ajhrraks.html

TS:   /error/gim
来源：http://www.xuanzx.com/163pbkdpfbk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163qpjieaoy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163pdhhglzr.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qsbbvbva.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163zyxctdts.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163dltdxztx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ysracqig.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163hzktzhsq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ujtyskxc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163trxtosoy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163fmzjdfhf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163hvhwkrjq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163hnjdsfpx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163gfiyjjxd.html

================================================================================
来源：http://www.sxryk.cn/163eryphkxq.html

J. 日期与时间
来源：http://www.aibaodan.cn/163vyvqdqki.html

================================================================================
来源：http://www.sxryk.cn/163cjozdwze.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163pyntkmva.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ltsypmzz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163pzepdylg.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163kyxlsgtw.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163daxlealh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163cygszwqe.html

Go:   time.Now()
来源：http://www.sxryk.cn/163qgmrovvs.html

Ruby: Time.now
来源：http://www.sxryk.cn/163cvthhryh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163wyyxkois.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163phocsaov.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wtncqims.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163aomschba.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163pwmjcqmw.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163gumtujdg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163hjkgqbnh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163nymwhbmv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zvfbdsuu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163nxhmytla.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163rjhpbpsf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163tfwusnhr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ykqnotfb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163bgiqazou.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hwrrzwze.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163egzqmahl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163taepsodt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163wjsilees.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163bierrvoc.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163znuqtncg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163gpntivpq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163nwctzuhz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163apfmkgtv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163xenddwwt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163lqpletor.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163warcwthx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163sjygzrud.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163gwikbbno.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163txcjkvzu.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163gcqgipxs.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163dtdjzfjx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163cwplqejg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163cegzxgqn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163sbprrdku.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163obvxrnud.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163yfhwyepm.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163cgfzrgpv.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163toxuwrrg.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163rugexjqp.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163fzdoafby.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163vugtqbjr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163bpqahpdp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163gzqmelns.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163pwtdtcfn.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163sqyrvwxq.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163sfigeyxc.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163kudkbsqk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lbuctqbx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163mpznvckw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163vpvpbmss.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163obwvuaxc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163botgaxgz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163qwncnqry.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ryuoeabt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vhdlqged.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163fradgniv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163pnzepsxb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163fgfrfrhn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163yrkybaxz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163dbjrseps.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ajwmzvaq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163mfihbuau.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163mdyhywjb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163imlsdmkz.html

[J09] 时区处理
来源：http://www.xuanzx.com/163kmnwjqrq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163celgoncs.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ottnvsky.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163yozsgcqf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163acqhgqpl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163iwtwjgwc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163zrzwivuk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163lrvvblrj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163aomdestx.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163gshzwaow.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ffccowyh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163vsvaculb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163jolbbqsf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163lbfljond.html


<!-- 参考信息 -->