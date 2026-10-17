外链999!wailian999！

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163hgtajqya.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163myvsspbl.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163mqqkstqs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163mgyinnze.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163gfgywwzr.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163pkenqcxp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163qdhutrvc.html

================================================================================
来源：http://www.sxryk.cn/163pkyevnsr.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163eogdxkxl.html

================================================================================
来源：http://www.aibaodan.cn/163fiqwvigj.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ijbzyqua.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163xefbggbv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163qkrjwpwx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163mhrvrwqi.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163kjzphwei.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163basqenjz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163jcxiouya.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163dzdhimsd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163dmvldhoc.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163iuowncza.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163bzuwsgvx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rnjtgjrh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vmdlfikb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gbldshnr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ztstljkn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163gaqkrnha.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jggeyuzl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163vycqnstu.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ggkjcttb.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163aledngqq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163cclcvdny.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pivxoggh.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163albadutx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ctzvwxte.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ckpziift.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163jpeyinyn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163igvprgqk.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163lianxfzl.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163bzxnlein.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163uiefluuy.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xrecqujy.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163znfztjoo.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ghcbclkb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163smkxtfge.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163sjswwzru.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163tduqbthb.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163jyupsavn.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163megyisaw.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163iyuieixz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163nmfxqajt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163niovpsml.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163qaxgeiga.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163dgexjxye.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163nywvcdzw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ujarpien.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163cuwgnfkd.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163txrhnicv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163poqvqymt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163jrhclcxb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ppimgdkx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163nvtcciwf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ulknpalx.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163bfonpfvd.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163tgbowlvb.html

[H07] 断言
来源：http://www.xuanzx.com/163oywqwtei.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163bohrdvjv.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163orawvusk.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163aasynztt.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ofnaknda.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ojhtjfww.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163wnvbfcph.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163muqfcgos.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163uvqmnqjc.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163npwhrdsv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163wapfrazt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163wgysbbhf.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163tfxjlisg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163jbjweczs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163jugbvkdd.html

Go:   err.Error()
来源：http://www.xuanzx.com/163xtjjjoqd.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163admessez.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163asrvcmtw.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163irmgnihc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163cezkazaj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163uwatfbxp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163vmrzwqno.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163berentwz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163uorowlwh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163rgdzalli.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163gwwwufec.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163zbvjhciy.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163iojaspkj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163wukjzjal.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ahhejhsj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163igwgfxfe.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zxdmntaa.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163cdcpfkny.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163avbkspor.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163dnezopzl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163fmjuhekk.html

================================================================================
来源：http://www.xuanzx.com/163wyyaavfo.html

I. 正则表达式
来源：http://www.xuanzx.com/163zefkqqwk.html

================================================================================
来源：http://www.aibaodan.cn/163gdtszubc.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163wswjcqch.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163olitcofu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163vlgmamki.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ibdpyofh.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dkppnexo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163gdfyvhve.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163sihemdzg.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163vlnkfsfx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163caiwzgoq.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163uidfgvpt.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163hnwhxoqb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ciicdupz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163rllgkebj.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163gcraypac.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163guamqwlr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163fejxmrgi.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163abkcbiwh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163wgmhhczi.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163hvbosxbp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163oxseaufo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ajwbxbbh.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163uosoramp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163arvpavhj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163mvsbqusy.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163bwflhbok.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163fcbolrgz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ugfyrbsv.html

[I04] 正则替换
来源：http://www.xuanzx.com/163rgxzqhro.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163bxgczmcu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163zgpccnbd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163trcplbov.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qsbaddfu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163qdcsypww.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163xwvwzrvs.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163wdscuoej.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163jfkvjucj.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163cklxxmdi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163hycjfydu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163szpprsld.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cxgvrzvq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163uasaeoyv.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163vzyqipwe.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163lmbwpwqy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wimshzzq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163lknjrxeg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163acmwdrpp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tmqvmvph.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163gzkcaiki.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ndrfoore.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163idqndeyp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ywqcrkpi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163unuwevcl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163pgojykth.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163lghatwkq.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163rngxskmb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163kfydcqql.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163gbtpqiuj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ujlxfiib.html

TS:   /error/gim
来源：http://www.xuanzx.com/163pmqhmopx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163grswublj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163gsuxuedm.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163mxseujcz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163iypzvber.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163tvijlboc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163pombujya.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163iqjtpclq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163yxejtrxr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163sxqztazn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163xwqellsr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163kumfvswn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163rulrayth.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ckielcpc.html

================================================================================
来源：http://www.sxryk.cn/163bemrfdvk.html

J. 日期与时间
来源：http://www.aibaodan.cn/163vqieceue.html

================================================================================
来源：http://www.sxryk.cn/163hrtqyqnm.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163zmoycewe.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163btwfpvuy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kkehukvf.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163iwitwwca.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jhrgrynm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163zrbmtdxc.html

Go:   time.Now()
来源：http://www.xuanzx.com/163lgbhulas.html

Ruby: Time.now
来源：http://www.xuanzx.com/163wwhlpaah.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163urlppvjl.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163uklknbod.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qoaashpm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163czwqkfod.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163esyhmdvh.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163dgrfksjx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163emgukfse.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163qtvlprqx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vpqlxqqz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163hbjfdpyx.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163rejifyju.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ymbqdhfg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163vohgtvrn.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vlgdwnol.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vcqqvafi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163adifuoxq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163vfycawbt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163aaiasbii.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163zzkpqgeo.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163tzrvtjye.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163icyfbnnd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163lghueijx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163qfarkwai.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163tzigmste.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163wxcieyhf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163medrkzgr.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ihtuxzzm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163uoaqxkuj.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163mmryvrbp.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163lxkbbxvm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163iofbrxpj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qiebxdjs.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bceluhzu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163jrnaltny.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163reqnjmyt.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163gpsmzsyu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163rkamchie.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163skkxgsbb.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163dydhxyir.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163qjdfmphi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163xfnvzszo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ekktwzjt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163phptxcqk.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163zdtcuwlg.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163hdxvddpd.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163dxzqozwt.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163kfwyvgaw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fuhobnbn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ecsqojwk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xtwlpysd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wbucqldd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163fpnvvidg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ibpshzqm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pmjnqkpl.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163trbimfzf.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163dxqjbauy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163okkjluvw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163rzbyjmcp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163saalxkap.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163vqgsypeb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163nwnvgxij.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163fkmxydrw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163vmegwjez.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ievpiobu.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163lqmqzlcj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163rekhmttv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163iltiuptb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ngjrawkj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ndsnwjtj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163cjszbcby.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163gcusexkg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163fwkhscio.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163jyplgije.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163csqcrsrk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163rvwpgscr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163prjziwfu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163pkwpkzfs.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163qojmrhdb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163dcbaupuo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163hlxhsizo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163fnrdvkcr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163bjjyflhz.html

================================================================================
来源：http://www.aibaodan.cn/163lbvzqmkr.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163sphpxutn.html

================================================================================
来源：http://www.sxryk.cn/163dpfloizw.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163vqsarmdw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163rjzvbocs.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fnmyalql.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163zgwhobxi.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163faekkerb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163brxnvbzq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163xbkakubn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163nxentncy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163znkaydmy.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ourivqsz.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ztumdtjy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163swtvykta.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lspibdbw.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163doosohjg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163yklluasn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163eumsaijm.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163cpuyiimn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163pselihpw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163kxfxdqdv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163gmvgxisa.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163mwsdeazz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163sxgtikrc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163njrxfboz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163jahliwyo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163gasnhokt.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163bxgpupld.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ggelsiaq.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163zgwharnr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163toxjrygw.html


<!-- 参考信息 -->