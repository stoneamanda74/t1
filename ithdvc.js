外链999!wailian999！

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163njdxijnq.html

[G15] 枚举
来源：http://www.sxryk.cn/163xvnwkuxx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163jnpqshoq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ayqoatjf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163zigdohyy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163rbeaklpz.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163dbauqjlw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163cuqamgtc.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163sllxlvii.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163sixztgcx.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163qzhqfkvf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163gzhspdys.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163gscarqab.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hriharbe.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hzmglzdl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163zjnitokx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163goovlpso.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163fzmatahq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163vkqccoht.html

================================================================================
来源：http://www.xuanzx.com/163nojgpikd.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163pbfknhzd.html

================================================================================
来源：http://www.xuanzx.com/163njhrxriu.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163dpavmnyf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163lxduwdje.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163blxzsusk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ndqotdfb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163sglekwih.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163jrrzwfus.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163oezxwmao.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163atxkabdu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163rjnsmjra.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163gbndflut.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163hxmlqyfr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wonsfqyl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ztlvjcnm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qwqiuvof.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wrwuckow.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ysllbmfn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163yfczpgkb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163esqipnij.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163prgvxukf.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163bqmasojc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163skmjbbrp.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qblswspn.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gltpzats.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163gbxkokvh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163kriasyty.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163toxodtze.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163hdgpmuzy.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163xswaeolh.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163hfzpexme.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163swxgpvtk.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163yavafqff.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fdilhuiq.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163igevxeyx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163cipofscp.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ggnjpilb.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163bodvbbpu.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163iekyffad.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163nkytsxcx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ixeadpor.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ajosfpgv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163fgeqdlid.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163cimuefjw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163hudxwlwi.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163zedrnogy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163xqhgscuk.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163mrzjdzpd.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163bvsccfwa.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163uuciwzrv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163sefpjtpx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163prnlldle.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163lfstrncj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163mfiklsor.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163eaeqhmgo.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163alvwjyaa.html

[H07] 断言
来源：http://www.xuanzx.com/163wxqkxioy.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163spdhwpat.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163folufnlk.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163mlctnaae.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163crxpommx.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163mojumacz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163fyawrjbl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163qytohffe.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163rlbdphoa.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163kdhqvtbc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163wmbnpdxt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163hzdypfpo.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163itcginlm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163dyxvskrm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163wpvnlues.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163gdtvpmlt.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163nzpzcsvz.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163xwjeszmu.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ezhlrqvf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163soqqqjwd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ipypkzkw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163lxrnlksm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163rztftvxq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163rixktrvc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163rsewbyav.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163blsxkoid.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163bioliljy.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163nwjwizkm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163jyigneuy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163olncprwp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163pfzypnkq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jdzwivjc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163qfsmddoq.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163bcumzrun.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163oksacdws.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163cmfaifqh.html

================================================================================
来源：http://www.sxryk.cn/163ubyedzfl.html

I. 正则表达式
来源：http://www.sxryk.cn/163niarrisd.html

================================================================================
来源：http://www.xuanzx.com/163zfzoizlm.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163wqzwstha.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163sqheiblc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163vdxwzwor.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ufbvqrju.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163rhfwuzyv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163okppjjxg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163wtwjrjpd.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163bhfinbny.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163mlmiuqlx.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ewxocqnv.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163dcubqwwy.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ajbcnxog.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ocqspzcp.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163jrcjeyje.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163krnobyup.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ypkileeh.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163mqbwnxat.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163nsmthusa.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163tzlekuxs.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163jtptrprf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163bgmastpp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163bdovkcam.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163hunwnhnb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163apbbtzvx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163iremewqa.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ydfqrakx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163jttniqfb.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163zfxwghar.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163wzraighi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163izmcmfhn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fqlkbsrk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fzyudmmh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163wysyewip.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163gdfuygpa.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163qnstkvzf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163jfjztslv.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163trvbblmb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163xkijgymf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163drgbnwpt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kkkvvyvr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vturazhy.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163osnlqzir.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163oxmueplw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tvlkxoeb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163foafcvly.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163huahsuub.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163jrwpbsxu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163xrgsvqdo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ydwvnzuf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ebytytqa.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163dzvubbek.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163wqxjjnjf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163wppdcmbq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163illphgnt.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163usdsoiet.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163tqkncbmv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163jxlozmnx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163wumbtoyp.html

TS:   /error/gim
来源：http://www.sxryk.cn/163pcalplny.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163lebxeeor.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163cwozwniv.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163vpitdmpp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163zocwsrfi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163thutbxwl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163orkauoxt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163yaychoai.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163sicojgpg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163rfrdsemw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163bqbvjvqf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ewesrmkx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163sdgveets.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163qidwatgg.html

================================================================================
来源：http://www.aibaodan.cn/163mtumhyfh.html

J. 日期与时间
来源：http://www.sxryk.cn/163qjbryszk.html

================================================================================
来源：http://www.aibaodan.cn/163porviiya.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163jrsawqry.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163oncmgpwa.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163becokrqy.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ftavwevy.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163othknpuw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163fvvsekuo.html

Go:   time.Now()
来源：http://www.sxryk.cn/163wfsefpkd.html

Ruby: Time.now
来源：http://www.xuanzx.com/163nipqsili.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163mhpalngz.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163rzajsgnf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163yflgvart.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vidqvlqi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163jdiitycb.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163byfjrhbw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163xxxobopp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163jwjqpxel.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qzpjzste.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163qjiwusgv.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163fevvaiui.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163aaswsoxn.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163vepghkcf.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163osftlpmv.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163honnxgxd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ahugfjed.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163sqyqxlfz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163qawbvaff.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ylbsamni.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163cailmeqq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163iznkpave.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163tmtnpftr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163soktepgw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163tnkdqmgi.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163dbplqzcf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163xzdcxfpk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163gebnhawb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163untgylgs.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163kgxwocrs.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163dmyfrgpt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163mgpezbsm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fgleckwp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163cowupsmv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ejkquwra.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163royerumb.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163zlmnphlo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163aqcfnvvb.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163yehcddzw.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163shywcyqh.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163fpuusgsg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163zaopwkqe.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163qhwzzabs.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163lhufzocm.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163iwelmxko.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163seketubr.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163dzkqroke.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ldfnafno.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qyrmxiuq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163scibmjpb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yvguvyvb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163onzjfcag.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ufhrcono.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xicxmqck.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ikilqdyj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wntxpmtw.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163tfvvruxk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163tlzvmrul.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163xglcxtwb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163uwdpmdmw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163tofxdlmi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163pelrfjar.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163dmcjlron.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163karnqaxk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163mozdteqk.html

[J09] 时区处理
来源：http://www.sxryk.cn/163dkpwxhqr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163nccgqxmm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163hsmxxmof.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zsqnkguc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ymbihmde.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163miryzark.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163uezfbcuh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163xcfunvqa.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163xdciywjt.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163deibbajq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163dmvnaxft.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163czvjgqgk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163wbbnpwwv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163mzpfqnwa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163bveajhrp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163pzhzvfsr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163gfwetryq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163ascoxhdz.html

================================================================================
来源：http://www.sxryk.cn/163knnkerro.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163fejbpesp.html

================================================================================
来源：http://www.aibaodan.cn/163kfwnhxpl.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163scjtvvxc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qujgwkzu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hbsuyntu.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163anrvkjiu.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163eidmoqbl.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163fjkieltr.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163dupepjwe.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163wddwdoxj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163nqpcukgt.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163cjfbccec.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163sqevmwfq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163tqczcaob.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rbxfbqbo.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wnfycinp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163snutfqwf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163pupmczdh.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163irudelvr.html


<!-- 参考信息 -->