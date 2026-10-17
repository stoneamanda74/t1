外链999!wailian999！

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163udyonajx.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fxcsgahx.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ifvougtt.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163kdfmlzxl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163lmyztmku.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163aljabhkh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163tmqwgxzj.html

================================================================================
来源：http://www.sxryk.cn/163txvnmoid.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163irdhctxp.html

================================================================================
来源：http://www.aibaodan.cn/163llhvaqqb.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163bhczwoql.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163vkhusmzn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163qtksfybb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163wrenjyxp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163dorhykqb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163bweurpap.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163mmswlfxe.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163tpacwvoy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163sjkhzgnl.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163wcaqdmap.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163lfkzfwvq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pdbnfxou.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xbsfgmah.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jkzfyyuy.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ndblymfh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163nbocbzxd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163pdvpadyz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163pwasapnz.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163zkjocnuw.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163huqyqtnn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163nqotymqt.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ppqiltod.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163igsvfcoe.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bctksevh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ipnkagun.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163txoayzwg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vmlikrlo.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163sdazwuos.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163impfylgx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163fvchqqtt.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hpbzwhmv.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rgxhebne.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163rezbhgam.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163cqmbeptj.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163tvhwfnyj.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163sfrxpebj.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hewdkqnf.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163oxfyxmte.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163qgmyhrcp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vjjftzuk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ybrrrdrj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ljensujs.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163hhpuxucm.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163empujoom.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163eddcyvvc.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163kczlknhy.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163xdxfjpaa.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163jjynrrpo.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163poigjzud.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163uxyzprff.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163mwvifmkg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163gmtgantp.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163nkaxjhhk.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163okkunggz.html

[H07] 断言
来源：http://www.xuanzx.com/163ywiwapvj.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163yhtiybyh.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163tvwreupr.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vbkddsxl.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163yuxednpf.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163wuywesbe.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163pkpbgkim.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163bncyrfje.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163mznlxcsd.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163biajlfke.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163mrswzgou.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163rqitdofi.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163aaalsboa.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163lirktgji.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163jjtwkito.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163kbkqhejv.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163bideihby.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163nacagtrb.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ksisvahy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163gpbrbtea.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163zoqzkhdv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163rjemktvb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163fkdiidej.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163eyzwsftc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163kbajvtcq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163xptrenzt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163dpjcxhox.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163lduhuhln.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163zyneljtw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163yjehsmjh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wcefqrqb.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jdjpuqti.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163yaikgzzz.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163wpegzzvb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ryaqcdgt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163lyorzojq.html

================================================================================
来源：http://www.sxryk.cn/163tepfswbe.html

I. 正则表达式
来源：http://www.xuanzx.com/163jejcwvdy.html

================================================================================
来源：http://www.aibaodan.cn/163frnouood.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163snjwzfaj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163yogezgku.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163mcehtusf.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xxmomgxo.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163sorgkebu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163deltekti.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163bsalksuh.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163bhdtygvw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ontjlyjw.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163tnncxndr.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163xqovzlpr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ieqwauyn.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163zocrdcpo.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163sxbnndqi.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ugxdipdd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163mmilutko.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163tolyjjtj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163sgeahzqj.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163rzjpdvhb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163scyxlifo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163rrevptoi.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ocystbdv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163hmxrungk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163dldwubde.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163rcvzwvgf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ifhfexxk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163aefrxnol.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163sprmuahp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163zrtmwkrc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163mrkwmrqk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163bexqgzed.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163lpdyiknf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163xqtdlfth.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163aujddgde.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163fumeurcg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163jspkxkbb.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163cnaejala.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ndbjsnax.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163tjidkaza.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vhwvbxla.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163yfqygowo.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163misbbaby.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163khqusrne.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wculxlse.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163noxsyvwe.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163vxcmkebe.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163hiwazmpz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163pxsubbun.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163jjbgzsdf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gjcfoznn.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163kcforpsg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163cdjjcptx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163gyuqcmnz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zddcuntd.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163dglcvyqr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163xcpaskxd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163xwnsgdlm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ynignbww.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163irembqnt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163tmpbazvg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163kutattaa.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163mbbcuwvk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163klmvnaoj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163bjdxjkbv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163cxjjhzui.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163uyjsgwgl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hiiaelku.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163kvkofcto.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163lavmqyrp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163upenjusx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163zjrcpryi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163pwqcfwwx.html

================================================================================
来源：http://www.aibaodan.cn/163fxxvqpzm.html

J. 日期与时间
来源：http://www.xuanzx.com/163tipvnjrk.html

================================================================================
来源：http://www.xuanzx.com/163tduhqmei.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163cqxdhcgd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163wlfowzsi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163fpvffumz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wmkgesxw.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163uxbsgmvl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163dxhscrpo.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163uxmlscjd.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163afcgtaap.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163gurlhnok.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163mystlbba.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rngwakfd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163bfncmaky.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163zijkvnpx.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163xybjhinn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ffrzxiih.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ahpyxlkq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zbkmjtux.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163bpyyymqc.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163rcqjckfy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163apjhlpyr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163elqwnriu.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ztjiastb.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qjlzutru.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ysxnouvf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163mcdvvumi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163wcdpunlj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ihgmwncc.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163vezlmlpf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163nrtrispf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163zlqdqtmn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163xqlihddt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163uivqppip.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163cvwtpoyu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163gmofxflf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163wlpupgbf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163clbuetva.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163wnsqvrmc.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163oktytfaz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163ewoxjvpm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ymvdoytq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163yeogtafh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163nswauruz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163wwskkbyx.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163uszhvlly.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ulkcquft.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163wddkbzgh.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163nbrnbxob.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163zxnxjntl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163fmoruadq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163bixxdopy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163urwtecyl.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163rrfsvije.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163khkiijiy.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163dxfeuexo.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163zfdtdrur.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nnqiegxw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163qaoyeupa.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163dzswttfi.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lcyfxifq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163grpblmuw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163wmyhynqv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163govnmsgo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gudjumje.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ohsbkylq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163hgypojzg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163oebfiuhq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163paxwzvam.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163zhdlimdb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163nscjimrl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163oeszlvqi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163rfsbhvaw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163nmwmamyd.html

[J09] 时区处理
来源：http://www.sxryk.cn/163eutljncc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163prjuzrqz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163bklyszvw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zmbkoret.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163thwcqfkf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163jhukndxl.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163cffuraid.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163kgcpjhua.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163qdhibrhm.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163rjdjmwan.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163fhnqfqfh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163qlrevgrv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163bvhfgbsb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163kcrqfeky.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163scneorbg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163vikkasls.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163pxayuzwb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163hlgpbmfk.html

================================================================================
来源：http://www.aibaodan.cn/163agsghlqv.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163xmfymqek.html

================================================================================
来源：http://www.aibaodan.cn/163sdifwzby.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163djyicumu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163sorxamwt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vatrgksn.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xcxvopxd.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mwtxtqtn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163vdxrwlvr.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163cstnconj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163tngprqwv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163pbcbdgyt.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163irtcrfkb.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163dqgohbbl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ogchlqtv.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ihqzdsmh.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jdnmfvfc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163uvumimpp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163luqaehhf.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163rmzwsydx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ahgokear.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163gzdbbmtz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ejzonkue.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163chdbuekk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vdtlutue.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qtxrxgig.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163owwunqax.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163pkdouarb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163jjlfoprz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zfrtungd.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163sunvlbuz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163pcoosffo.html


<!-- 参考信息 -->