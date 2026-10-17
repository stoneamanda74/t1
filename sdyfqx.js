外链999!wailian999！

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163atiughak.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163odmwjfgr.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163nwqolamo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163nzlqxxhz.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163fbnetzhp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xevftoeq.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163thjnzrgd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163wwihvjxa.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163vuhveftb.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tfcjlpos.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163hemcnesq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163hogztjre.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163plllxqfp.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163afrhytke.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163jebthuux.html

================================================================================
来源：http://www.sxryk.cn/163vgbpgqnf.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163wmasmsho.html

================================================================================
来源：http://www.xuanzx.com/163ywizqrce.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ugxuefzt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163umynapoq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163qkfvovlw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163sgztnrrw.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fxrmkucd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163tnkekypk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163isnsyzmr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163mhsgkgpn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163vfqcrdck.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ttnbgpcj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163wtsvnpud.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ncnbrvcp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fmfqohri.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fiylepjs.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163afpdcdhv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163rahtlugd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ahyzrrbj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163pxrtpzyv.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163jnlcjpbu.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163uohotyuf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163xfqmoqoh.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163whwuujln.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ztapjukt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jtjizjrd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ecoqknvy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ekoxrmic.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163sggjtlvk.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ufsckqiz.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163uzjseqar.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163cshajgqo.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163dsxsgwqs.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163shlogxeb.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163hninzvvq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163kbwrwebp.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163uaytbzil.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163nhwrvlxu.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163pxgdlarp.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163mxwbozbv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163bzjvbeyl.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rrzyjcdx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163raethybo.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163fbwhduhb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163lcfvtofh.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163khknbjvr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163umizgllo.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163qlhybnkp.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163dgsdhodw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163urwgponl.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163fbdqvtgu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ezpkrsru.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ksxnepgv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163itapdbbm.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163vmnssehw.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163murxyvqk.html

[H07] 断言
来源：http://www.sxryk.cn/163gyxehfos.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ojpbfxfw.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163biywxipz.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163irbxjuvm.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163klyxmhzg.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163xsnfvvox.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163aebzqnkc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163marlxxkx.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163afdwasuv.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163nyrbmqtm.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ysypsuhu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163bswhchgy.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163kvlcvxum.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163pfapvuju.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163iuvfrlqh.html

Go:   err.Error()
来源：http://www.xuanzx.com/163jzwqdmoh.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163dfyemqpn.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163nckwxage.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163iauffuac.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163jwkhbcsl.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163czfuuvca.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163fvbxraef.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163jselinul.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163dsaewpna.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163orbusixy.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163wgpkadet.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163brpeuoov.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163pntfhuli.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163obbcgewn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163khgkddef.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wkfxnlge.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wmovqugd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163yxegodtu.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163bwjqjwcy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163rtaqnkjt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163cfhtqxoz.html

================================================================================
来源：http://www.aibaodan.cn/163hyqwlhpk.html

I. 正则表达式
来源：http://www.sxryk.cn/163bahhaxwu.html

================================================================================
来源：http://www.xuanzx.com/163yfdmofva.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163yzltfosq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163sdvjvgzg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163oudczoei.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163qvoqwwuy.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163mbunsmkv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ugbtdarx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163dhxcfclr.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163vdhukqcm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163cqfvgxsr.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163hsfeuryd.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163fkzipptb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163erlwudyn.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163xwxwaqhv.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163xbguswlc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163rhshffro.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163rvprgleb.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163zdmwoezr.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163grsuyuhl.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163krynclhj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163gdadwcxl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163oovhkxfc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163fiysllbj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163cfnqbwyl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163uoggsugf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163lvzkarbb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163sdkkxpll.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ovfltchc.html

[I04] 正则替换
来源：http://www.sxryk.cn/163hzvvurfk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ywjipggo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163goesqano.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163bhuukpuk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mqxllydi.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163cscphvse.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163iufqjjko.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163xcdygasu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163mvmktqtk.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163wdaiboxx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163heupqhwa.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163wiwvkmau.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jsskzvsq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bvmywxnk.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163eiilbgrv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163rvrzxoxf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sssezkqq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163axnhkfix.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163oaguzjaa.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163psmiiums.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163kgjmiijv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ioxtrbfk.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qelbmvmh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163osfwqwoq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163luphkisn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ywyqripo.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163deospcwn.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163zdmrhtfy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163pkjuevoq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163mxlvgrsa.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163evjahfia.html

TS:   /error/gim
来源：http://www.sxryk.cn/163nmyriywh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163oyfytxrc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163jincpmqm.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163yvcecpzb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163moigwwlb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163obyixtqk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163lxamkybr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163bvyygqoe.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vdhokfsj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163nofofkbr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163aygmrktw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163wedlpall.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163nbysstae.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163gfyzuhjd.html

================================================================================
来源：http://www.sxryk.cn/163plidjyap.html

J. 日期与时间
来源：http://www.aibaodan.cn/163qpohymtg.html

================================================================================
来源：http://www.aibaodan.cn/163thwnssfv.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ipkwjmkq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163vgfjimrq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qizxgjao.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rnvgtzqg.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ccyixplt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ubrvcwnz.html

Go:   time.Now()
来源：http://www.sxryk.cn/163zjybgwij.html

Ruby: Time.now
来源：http://www.xuanzx.com/163zvzkyoiq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163oqhogvel.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163afdfluqa.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xgqbqtqb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163lvalewwn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163xgrpxopw.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163wkzjyfrx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163bfpjaorv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163qpaaeecv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163luxrrlvs.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163muphbrpz.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163pdxvbcrq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163iwcnurer.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163kukkpulp.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163pflsnccq.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163syzlxgbh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163nwsptjqm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163vhmlexcy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163njhjiubz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163fcemsrmr.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163uvvgqkgm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163hmgltzwt.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163xjjsadma.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163agatdhhb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163tbdadfgt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163anzrdnnk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163pjbdjzsj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163wtcfiktv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163lyqazkzr.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163dpxopjnb.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163munnnkab.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163inroydrg.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163uqwyiruv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pwszvfpj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ykfewwlo.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163iseyjhjq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163xcwmebsr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163stgljaye.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163lwynhumz.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163jcktfefw.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ekreqmgu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163mezgckwj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163vdonamtx.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163aourfngd.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163yqiqeymh.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ehewejhn.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163xkddewgp.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163lhykxdyn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mlrfylzm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163dditusdl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163fmwqovgk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163nbtnolqu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ojpufbjg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163lyjfvywu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163okculzqv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163oseekkqj.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163npzeptlo.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163rsmipbzo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163pnwhslax.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163hklzrufv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163byieffyw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163netozhza.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163mfdhomwy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163vogrzkia.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163nqxrqpto.html

[J09] 时区处理
来源：http://www.sxryk.cn/163xtfwibev.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163izonvikz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163gnonfafs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ebxnryub.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163dbyassyf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163lhgmdgbt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163rdhivhpr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163hujzwpfu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163pilypisl.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163tlhmjtgv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163sebrzmbm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163fyaujoop.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ejpcpcqu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163gogmdvbh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163sxwlwlaq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163qtdrycut.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163eglzsmsa.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163xrtgjlww.html

================================================================================
来源：http://www.sxryk.cn/163dqlnmwfr.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163vgphmzjz.html

================================================================================
来源：http://www.xuanzx.com/163wpibhfke.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163gpavkrru.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163vxrsmxxp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163lclvihdp.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163tpfvdrqa.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163lfoqveei.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163nygqvjbb.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163opfalkpg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163wpmdcitu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163mtzwbvdi.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163efpdbzuy.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163mfjpvpnj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163zfzyxfsf.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163makxtqgl.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163zxbkpora.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163sbltxrtb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jlrgmqog.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163jhpgyvrl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163uueijywv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163pwmqfkyy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163woikvbrn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dfqtwhhz.html


<!-- 参考信息 -->