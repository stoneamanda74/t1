外链999!wailian999！

Java: u instanceof User
来源：http://www.aibaodan.cn/163kzzhwerx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163fgszkkkb.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163rfpbmfsk.html

C#:   u is User
来源：http://www.sxryk.cn/163wvhavyxe.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ikxqhhhb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ytlehbzf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163gtfnwyfk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163spxeilsc.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ykkrendy.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163cvgdyvyx.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ztxmpizt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163zlhkskur.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163hvcebtpl.html

[G15] 枚举
来源：http://www.sxryk.cn/163eeyisesh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163hejiqtos.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163hppkyqyk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163gybmbpiv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163cmhlcbtd.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163huhjmsml.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163jpiqxqtl.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163cthzrepz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163sitrwjfj.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163gzlfrcjo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163abgzisry.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163erntoxol.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zavnfexr.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jghjipas.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163zsetrpek.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163lczsgjuc.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163bncujhiw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163egbciqhf.html

================================================================================
来源：http://www.xuanzx.com/163ynyoedyg.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163cpmqivvr.html

================================================================================
来源：http://www.sxryk.cn/163nnrajins.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163fbvqutex.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163mltgcade.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163deiqsmgd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163sylxayla.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163alsjjocr.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ncnpshlk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163gupcaadp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163lxtukzow.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163kdiwiuri.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163kndqgepo.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163byjpahfy.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ofaxnxwz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qltgndie.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lznbpmfm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nrcbspda.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ukegruau.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163rfcurtxh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ermfrmnw.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163udtqklxk.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163dnekdhat.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xmxdodmb.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163crcitahc.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163lzjjycmc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163fvfbmaec.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163zzqztlxn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163avwwjqcj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163luvkjdyl.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163vlftkqdt.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ezyekwwg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ygqitlpi.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163iezsyujy.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163vsnbeefx.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163wrmpspdn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163epjdunbc.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163gvbknlef.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163adzoqsdz.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163aklpaeyd.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163jmysltap.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163pgejfgpk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163hknphoto.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jgqvybny.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163pzwxlymz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163qvfvrwzk.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163gsrpdkca.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163vkpvlwmt.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163rswvektz.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163oddlyzam.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163iigewvrt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mkztblsg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163keihsufm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163uoscqrep.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163oedqwkcp.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163bwqvvekh.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163dymnndlo.html

[H07] 断言
来源：http://www.sxryk.cn/163zhanlroo.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163xojqhgkt.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163lvwwwaer.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qhzwrdfj.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163dpjlxbes.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163yxxcrshf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163onsnfhda.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163uxqzhsui.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163qlaahzzk.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163lpzmbgfi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163jdmiheuv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163rqkbmudl.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163tohqnrps.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163trubient.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163piclthkj.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163xyorxnqk.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163aslqeruk.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163kodzknyy.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163igxylepd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163yytilnem.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163xtyssgru.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ybeqyrmf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ndrmlufx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163imyorkyy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163vwtdtiqw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163mlzqoeub.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163pigqxffz.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163zichdbmd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163dlwfeaqa.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163nnmqdgsg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163kkemydsh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tferckcq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163pryhssmu.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163yoswmwso.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163rjiuwlwn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163sqotgisf.html

================================================================================
来源：http://www.aibaodan.cn/163twhgqjin.html

I. 正则表达式
来源：http://www.sxryk.cn/163ihtnmydz.html

================================================================================
来源：http://www.xuanzx.com/163njyhxubi.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163rqwnibvh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163mvybbioz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163cvftvtqg.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tgdqvpkv.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163zfrazhjr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163owkjjqod.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163xylcomsf.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163mdbndtrd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163hglgzcjk.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163xoeifqwi.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163bojjhojp.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163tenbxnro.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163upvgahwq.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163zfzdeglb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163awfkfbly.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163xwpbwath.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163tzeppirf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163pzrrlkmq.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163gnkwadrw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163xdcwxntd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163fxdsaito.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163uasvsrhh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163okfkjdyj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ipduwitq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ogqjmepv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ketlatqu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163uccosmsi.html

[I04] 正则替换
来源：http://www.xuanzx.com/163pzssaxrs.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163drzdzppt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163deebyocm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163nctxckkq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163fckqidmn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163iupkmkyt.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163exyodvry.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163vtjtjfzb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163veflvxih.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163gfyvejda.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ighrsrvp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163iqasuspc.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163necmuakq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hnojeact.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163fqkrqsyx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163uacixodb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163nrsrdwkl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163pvumcvpf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ibrzekjl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163fzlfbfsi.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163szsccmxb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163tsruigmu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163bsspxfvb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163mlttmnqn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ulbgruck.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163akfdjvtz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163zjfxfkzx.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163lhjarohm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163jjkkscmy.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163gdamkpcw.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ddftvzwx.html

TS:   /error/gim
来源：http://www.sxryk.cn/163tdomjprr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163zkmvbvsl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163boildlpu.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163wseuvsct.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ginazrhf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163psrvvahm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163zsxwxtva.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163nnlxzbzp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mdrrbqyq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163welryovc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163bvhygysj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163plbqjdrz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ydoananc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163xvnorlnd.html

================================================================================
来源：http://www.aibaodan.cn/163httnljyt.html

J. 日期与时间
来源：http://www.sxryk.cn/163wrgvhnae.html

================================================================================
来源：http://www.xuanzx.com/163cygmkmah.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ilmrbcad.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163egtcqelj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163juxkoupp.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163juzdyaqs.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163znaqilkc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163azlbsqrg.html

Go:   time.Now()
来源：http://www.xuanzx.com/163dysdnmni.html

Ruby: Time.now
来源：http://www.xuanzx.com/163dtcvkkod.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163cxgxkoau.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163xczuhujx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rrhfaegz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163trkghcdr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163nfbcjlke.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163peitngzf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163dtuywodq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163cjsychgc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163gxcahrms.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163rouqpdwp.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163kbnucnhn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163rogjhifu.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163varjlfva.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163tvziyckn.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qfoynfgs.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ipweceta.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ctcoceqh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163pdirruoq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163jansrlip.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163wwllrpbe.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163ektqfook.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163yitraduw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163wmzvbacb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163qagsgsak.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163kzlubiyu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ucrvqsns.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163xvnzvamm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163uvnljhom.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163pdovhenv.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163fzkehmhc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163kniukszb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163gxoonkqp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163uoumelwi.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163nxqiiewj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163sjwgapaa.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163axbvsllf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163uqximmdy.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163fiycsufb.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163hymdpito.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163uuipdbpr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163gbdkuyns.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163yevuwide.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163iutvjmru.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163rajddqsh.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163voigyhty.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163wkwftvzm.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163gimzyyii.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163spfxipmr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163lukpzwws.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jefvroyx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163syqeuahl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163vmdsyxts.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163zkdbzevh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pyjsdwql.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fnapjjpt.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163whdrigqb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163jtqncawx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163xdegsjmj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163uhmqwnov.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163nvwtajuo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ifeeeqdu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163jglrnccs.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163fxeggxwn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163lkejnppo.html

[J09] 时区处理
来源：http://www.xuanzx.com/163icxdusle.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163avvshngs.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163pnmsuerh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163paevocdq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163hnhwbyic.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163orbeiyfz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163suvwqcjf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163jnyzqpuh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163zovzmikm.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163dvxjadkt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163hjyobioq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163iubnyroo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163iuojeamr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163jafrwqaw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163zadhxvql.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163idwxfxlu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163taefczet.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163wlsixewm.html

================================================================================
来源：http://www.sxryk.cn/163gslggjaw.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163jwkjqrnn.html

================================================================================
来源：http://www.aibaodan.cn/163bquvmnrw.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163knhilfma.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163aurbnisa.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163gfoyftho.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rpntrfyl.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163vpohzduc.html


<!-- 参考信息 -->