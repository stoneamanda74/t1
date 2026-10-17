外链999!wailian999！

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163kkkgjcgh.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163qoxiibsd.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163zsqhnwgp.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163rhadjejg.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163tcdiylcd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163bfavowgg.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163yzpmvhmx.html

C#:   u is User
来源：http://www.sxryk.cn/163hjkksvzt.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163nhmhzpkm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163vbnvslut.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163qxzjqwpx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163lghkxskn.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ppffyyii.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163hubotoxc.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ljzgkglo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163nsqzpxfw.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163apiyclac.html

[G15] 枚举
来源：http://www.aibaodan.cn/163zwqimlwu.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ovfdjklt.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163nqjogfgl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163fiyrhhmi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163nrpsbhgu.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163gpaxnxpf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163wlxcvruq.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163akfjzpnk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163nvroenqy.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163xcdetnyo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163yqlpnxvb.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163zjqzarfg.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163bufkfuam.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zdgsokxy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163kalcqigg.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163wuodqkbw.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163qugdebow.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163uvuirorg.html

================================================================================
来源：http://www.aibaodan.cn/163gdjsmdvq.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ykdbqumz.html

================================================================================
来源：http://www.sxryk.cn/163gpeiojec.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163kwjynmtu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163uxlkdohi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163clekmnzx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163huwaaatd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163xaqdixql.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163iviiauwq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163opxhozqb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163qjszxilz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163cbtccvzb.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163igxyigfy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163kcytkjxh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rrlyvxus.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bwwqgjto.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gelhvugg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tzhafcso.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ddeqhsmm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163yavuwdnn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163blagmnct.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ndfqsjhc.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163mpbghfzl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163nymnqgmi.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xuscneqy.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163relltslv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163dsoevxmo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163gfelyowu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163mxeczxcs.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nxjjwfho.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163zirkqoiu.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163nwjtzrdj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163abfutlme.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163kztawkud.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163izwjfyda.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163rmjsuwpl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163htttkztw.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163etglmxln.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163arnbovej.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163ucggdlib.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163bctktfqa.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163iducohjm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jrqpxitt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ufiwlccb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ggzmldcb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163zwzitqfv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163vzbmsoky.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163jcbngmpe.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163gbkpkrcv.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163otmrzhoi.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163rkgdejln.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163pbywmvdp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qkmrktrl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163riwdhgvk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163qdmkumuw.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163gvlshjue.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163lvvqtelf.html

[H07] 断言
来源：http://www.aibaodan.cn/163owftvmcq.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163qhdrbzzs.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163hfobeoas.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163heujkaqx.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163laultdus.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163smqxxeds.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163xigtqhxa.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163oastkvzv.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163eohtdvwm.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163uacbdqjx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163pwvnrgga.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163wcmkmswg.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163uirbbvcg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163edjfxxjk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163honsrrlx.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ijkvpsxn.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163renebwka.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163rrgwzwrl.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163cfrusbur.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163mbvwcwzy.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163jmrelxav.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163tyadtsia.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163nmrvsboa.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163zjprluzr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163fbkhhoay.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163pjwsckda.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163nnlzymnd.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163ufriymap.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ewrckxqp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163yhkrcxlq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zudwpcre.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ifuntdxr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163bqjarnpu.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163rpapbasr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163fyxvervj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ammwbgcv.html

================================================================================
来源：http://www.xuanzx.com/163kvieflpu.html

I. 正则表达式
来源：http://www.xuanzx.com/163hoharihm.html

================================================================================
来源：http://www.xuanzx.com/163cmewxcty.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163mbbabhuj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163mgbxabmg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163mfkprbup.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163utjzlagp.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rwqkdujl.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163klrkdgsh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163xzuxrlxq.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ohcajsmt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163quwczoyv.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163udlqlnpu.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163nrccmqmb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163jaksgdni.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163nxhaxgsv.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163pebbpcqe.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163pvkkqppl.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163lrxajbos.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163fcwffalb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163wogfaztz.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163udyzkfuy.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163dilhzfwz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163sjfcftsh.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163dnxdohfz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163krttyimx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163crywydxj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163blkezqbk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163fotujkbz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163sjqjwkgk.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163bccjtsmz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163lhglhrlt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163izuqgexr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163brxekvfl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163vbdgarcn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163scdrzvbz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163gxlizduh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163izjyveqy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163byknfxnh.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163bzsgpbqg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163lhwoifvu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163rowqrelw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lqbyvcze.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ygoehxhu.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163tfcmotne.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163lqirejlm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ljifgrfc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ijdrhldd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163imezxfum.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163drahpdht.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163zxqxcjdj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163biqfansm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ommenbyb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163pcutxqly.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163bogbvrwi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163xzonwoee.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qdgwlpdz.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163qtmgckah.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163yesfsiqt.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163yenhclxj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163mixfhniw.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ghbphoeh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163vjqarusn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163mtazvvmh.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163xzhzufou.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163acllcoie.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163lrtjbcub.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ebnubyto.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163nvkylbzf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vimdiwio.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163chdjhphk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163jksydbkp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163poftblbv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163grhayyke.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163uonwfcvq.html

================================================================================
来源：http://www.xuanzx.com/163lwzcuaol.html

J. 日期与时间
来源：http://www.sxryk.cn/163eyvabiao.html

================================================================================
来源：http://www.xuanzx.com/163zftbqxoa.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163knrtknrw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163neumbbdc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163iodzjhqx.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wnagrqth.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163nnicqpke.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163omzgnucb.html

Go:   time.Now()
来源：http://www.sxryk.cn/163czyycpka.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163sltsorai.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163gtqcqiwi.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163byolboee.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163liacugda.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qpndspwg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163cwhmxvhh.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163bmudupcr.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163pzqswula.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163bwzrgblg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ydregboi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163nuvhiffw.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163dfrchjbp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163xdycyhuk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163hymyhmfd.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163awbfimjk.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163garjatco.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ucaqfhsn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163kufwhuqm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163mmchzohj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163gbqpimpc.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163xxmjrooc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163vftvwdhv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163wihllith.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163hreeoetu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ddvttknr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163shywnuki.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163rkinrwgp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163aumcbqbe.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ertmjbqb.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163crygbqna.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163krndebgr.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163iuncwimq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163twizxhtw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kphpanoj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ibcfpovv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163qytusvoy.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163srdzjspw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163cudjhljl.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163rtnjuuvf.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163gmtmzami.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163yhgdjbmi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ebncdjvz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163faecqjxt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163hctxbnqg.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163vyatdzmy.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163fiklsaob.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163yjfhzkqo.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163jlezakxx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ibrgqmeu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163fdogaimd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163njxptvou.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163mutyqcdx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163vyxcvgqj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163bycxjcfm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kuvjnbus.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hzymtirf.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163oliiazfk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163gltlngzp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163olwgvzpi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163yqticpoz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ogpizyug.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163dabwsppu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163nvtmeihn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163xhwiaury.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163qiimeqdo.html

[J09] 时区处理
来源：http://www.sxryk.cn/163kpxaykzv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163dtbxpfqu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163akplhysl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163xyifslxy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qxidszeo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163agjemhaq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163nqnfmrpc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163uklqamha.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163stsozovh.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163uumgsxfm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163uqjivkyk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163tnbqqklu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163kvjzqwht.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163qbqwgxng.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163vmdkhcms.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163jhfkjknb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ceeimvyp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163hrnvywnq.html

================================================================================
来源：http://www.xuanzx.com/163gyopowhe.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ghedpurj.html

================================================================================
来源：http://www.xuanzx.com/163ufunmnsy.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163nmhlhhdo.html


<!-- 参考信息 -->