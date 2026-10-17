外链999!wailian999！

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163hrmyxdnv.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163rmlyyrst.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163snndshnj.html

================================================================================
来源：http://www.sxryk.cn/163mtutdxsm.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163cczgctyk.html

================================================================================
来源：http://www.aibaodan.cn/163kxjwdcli.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163nkphowhz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ntdhpwbb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163xhseafmz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163bkomtiyk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163wsnkiijz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163woqldehk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163xsssnflc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163lapihwsj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163oquethfv.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163umcemdqt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163jmhbkutg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mxatywar.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vkvfrnov.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rxydkgdu.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163yjretogi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163qdkhluur.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163qtsyaboh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163rbhqnont.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163pgugmoob.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163pjaujysp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rzvctzcz.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pfifmmdt.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163bkbuqdxx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163jqqxepmz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163scswduar.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163msyjgzhk.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163jbpejimb.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163mmmvyupj.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163fzggdvog.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163wnilnrhw.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ppuudgrv.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163qwsszktp.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163skjqxdfz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163yxcnflxc.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163cqniykud.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163zwbtecza.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163udewtpof.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ijxsvtiy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163jeicqkrw.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163hkiuailc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163mwoadvku.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163sylagebc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163oqhznzlh.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163vkeafloo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163glgqzguz.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163calvddns.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163eaizmnxv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vtnrmctu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163szyqohvq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163dftrpjvs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163zxgjzvty.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163xuqggvse.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ogdslyzz.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163rqbxnztb.html

[H07] 断言
来源：http://www.sxryk.cn/163jkgsnfza.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163llqbwtge.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163wcnikodb.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163iofwneay.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qevenvyx.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163mfmaxmqa.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163gowlbljs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163jzeomoao.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163aqkppnwg.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163wmseaxeb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163rnkzkjza.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163kbuplwsj.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163wdquwzks.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163bozjefxt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163knqctebq.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163myipyvcv.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163nduoacln.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163svobpfru.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163lkdfiyxl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ivblqnbs.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ewoluycx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163rtmaytcq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163kcmpbztn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163yrlcbkzl.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ahnhhztb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163oappxpdr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163qptyobak.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163abhediet.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163olhbiwnu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163jyeitind.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xbyuccef.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nocfcxtx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163wddsxart.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163kmqzdhtn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163wpxfphyh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163egethzlj.html

================================================================================
来源：http://www.sxryk.cn/163sjpbscjs.html

I. 正则表达式
来源：http://www.sxryk.cn/163awtaonmv.html

================================================================================
来源：http://www.aibaodan.cn/163ogcwzucp.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163mwbszsxf.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ftuyxgrv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163rcwdrnjl.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163woyjobwp.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163lfpswnxf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163cwsusrjg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ttmalsfp.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163isylhdup.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163nzohzyhh.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163dulexpah.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163bmhanjbd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163wpfskyng.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163cusbbeei.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163fpojbmzw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163gwxersje.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163tdkkgkrk.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163mqmvndxw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163risknlfn.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163zccghxue.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163mxxowhyf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163acsnhjgo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163yirapsqq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163cnnmhbry.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163akfbygsg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163eyhogloy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163vaznmfkn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163syabxwrl.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163yjhxrtyc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163uytigfku.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163dbhnfnmu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ktuogtcj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163gymtjzej.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163hkvqpaea.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163uzplhjzg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163glayvdjw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ppysayzq.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163zmoxgiua.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163nxnupqjr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163qddlhycw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163trbcpbwq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163uxuwgcef.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163kbsofelm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163fovsnita.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dowznoqb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163gwejduie.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163fyivyyvu.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163wwpydrwg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163vkjzibfe.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163yxuiyfkv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163cidqvjgs.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163yjhfmldf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ifccjhzb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163krsjobrs.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qsxxxkjj.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163fghdueim.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163fcsrdfws.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163fryhnqmb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ejjgiqxb.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163zimytfdm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163dxjsdoyf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163uuwjqmyw.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163xkzrqsbl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163zxitlrkd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163luwrkbao.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163nrcatbhu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163rhyxfuqx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tjyjgfdq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xswyscan.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163oblnjtqf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163mjamgeqv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163akxjaecs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163zlivwwoa.html

================================================================================
来源：http://www.aibaodan.cn/163sveczuzc.html

J. 日期与时间
来源：http://www.aibaodan.cn/163vcficowq.html

================================================================================
来源：http://www.xuanzx.com/163kzmdfnqg.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163qafqpebn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163iygldukj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163paagwseh.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163eakzvuil.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tusiwjty.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163nuefqcvv.html

Go:   time.Now()
来源：http://www.xuanzx.com/163rcepwzey.html

Ruby: Time.now
来源：http://www.sxryk.cn/163cjehxnvf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163exflcfjs.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163uvafqpec.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ixsnkrys.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qehnpmtq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163fxzyipek.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163kcafnwmj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163priahtgq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163nnkalzum.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163sbukcmvv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163whxsuyxq.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163vcxcfpxp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ivqnswyp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163pejqzeyj.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163jmezkpzv.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lmensjtw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163wtclggmr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163tikpvjnl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fnnofmsy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163zssihfhl.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163chpbeilw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163bsajdmzl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163fbewcujo.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163fvdjcjsj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163udeyzplo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163yslrjlwn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163hnlwqekk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163wrhedbuq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ztmtwljq.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163xjxikioy.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163qzroxrty.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163jbxsbtor.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kugfmidz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qdiabvzb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ebcoaadc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163drosczbb.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163pizzqlos.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163bkaxwwpb.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163cpvopbyv.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163uxzmppmq.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163asqgikst.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163tpsvhxdz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163qsthjnhh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ssegnsqm.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163sqzwxjpj.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163aksnhaue.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163oamkqawq.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163phbgzyzg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dnmyileu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163titvqamo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ekxncxks.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tfgvlthl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163qflxrkut.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163dgoqtqrk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mhqzmjjj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163byjazifs.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163wiagfhgb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163yvijzxeg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163uuflolde.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163hyxkhwcm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163wphzmtwh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163nyjdmnne.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163odnhmmpe.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163iobjhpbk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163pqbpoxsd.html

[J09] 时区处理
来源：http://www.sxryk.cn/163avbzcdiz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163wdaqnqwf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163cbozisda.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163elqlrguo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163jftxchfk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163xdllwzxe.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163wejxymfj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163vfptfrkx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163auftthuv.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163bwxykiby.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163dzeazkic.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163lpqhemjs.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163jwyfzezj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ikurbrha.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163gabrlvfu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163tqsdafqa.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163gnleiptn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163irmnqavq.html

================================================================================
来源：http://www.sxryk.cn/163zdbtewvc.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163jdwwvkmj.html

================================================================================
来源：http://www.aibaodan.cn/163jaixvjur.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163xevlhenk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163rubymtmj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163fhrbjuzi.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163lyhefbau.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163phszljos.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163benyhdcp.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163mgufbrqo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ififznwh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163zwxvsusw.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163wgaiigrw.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163kwualeun.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163tgypzsdb.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163xlkmrhyg.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jsviafha.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163qfyhdatc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ufhpqebw.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163nafqeffp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zsowcilv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163gbyotoxu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163wgecnkzs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163eekpddiu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163odptbslp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163fqcrimwa.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163zhschirh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163zkosbnot.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163glgkiryx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163izkianae.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163prcjyoxl.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163qithjscc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ujihvpuc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ofnovszh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jifswaqt.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163vpckzcjn.html


<!-- 参考信息 -->