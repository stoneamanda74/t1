外链999!wailian999！

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163zpcfcfma.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163dibmlfwu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ozkacwop.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163loaqfdfk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163zkcqlnir.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163esiwknnm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163mrgqajqh.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163jdhtytiq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163riozuqjl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163igescedl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ehsigdhe.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cwzogzpf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vgbyraud.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163qwumciep.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ygdxkvpn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163lyxaldsl.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163qwcxqjha.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ahbrcxrw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vrfyoxzf.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ncghlwwp.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jhqemmam.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163npksxepl.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163tywskche.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163wdzecodv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ydopmabk.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163zncruudm.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ttdxjwvx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163vmrhbhly.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163akjcjeuq.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mmawucib.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163yfpnndah.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163vuylebbt.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ezqtirfh.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163bwsdouxz.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ubbxhbtn.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163vcqxtpco.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163paoeddhe.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163hbhzbljl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mpktuhwa.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163vkhyzklp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163onrcukvw.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ziszafpv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163fpeptjlw.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163eumaamtx.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163kmeqkhqq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163zynqwrrg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kaeaimok.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zwwoinsn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163rcudfnff.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ykuibzqj.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ulntyasi.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ibktugte.html

[H07] 断言
来源：http://www.aibaodan.cn/163kgcfblpq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163iebajtsb.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163wdtagrzb.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jjbgdjhs.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qwggchyj.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163yvuirouk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163nqjcocsf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163jltbjlxn.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163smgvjejy.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ufcvvmri.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163psxjjuze.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163zofxfwdp.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163awtuyuos.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163cvkebdpc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163pmcmzmlp.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163weepdvpf.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163nyzeltsw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163uffruvsn.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ssusxdgi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163yaiquksv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163zyxtcpvs.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163vmuuxmit.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163xahzewdz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163npmispsd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163tnskqodk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163lrqgkzsr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163scynvlsu.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163jaqvkunm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163tmmlufpl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ljwjhrjg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163engsbbnz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163bzookcgk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163djzlbucm.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163igacqood.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163pcyainir.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ixddmwbl.html

================================================================================
来源：http://www.sxryk.cn/163rmebcivr.html

I. 正则表达式
来源：http://www.sxryk.cn/163kuvcqqnk.html

================================================================================
来源：http://www.xuanzx.com/163tnbkuqdx.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163aailsldj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163hglbvuuc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163mjwhzlel.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163obxahcpp.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163otjbnfwq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163fkvtsybx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163sdhocxsn.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163nauzthcb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163bpwbhgok.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163bkumwpxx.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163yxifofks.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163glwqkayb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163zuenarnk.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163gvtnqqot.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163tctsseaq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163qutafqaa.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163sjfddxbq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163nghwbenb.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163jdsdcmyu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163syztonzn.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163fmwhwefd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163zutoxozs.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163jyitmage.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163hshjkemc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163jusbwbqs.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163zbcauvez.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163vbeqxfnm.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163bysudhii.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163qjknvfwu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163szjzwppf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163thdywfnf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163uokuxfnb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163sttjjhul.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163hougjpna.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163dfbrhkni.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163tvgwhcfx.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ytgvgaki.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163gubykhba.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ylkievin.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kczqdwyg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163svxwxfiz.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163smlhxkkk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163mpiltdfm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vdcieyzr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163lzomrkwi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163vscvctme.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163cwpdfpmc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163onvfowdn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163vfwxsyep.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vngctsrk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163chnbbebu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163zygmzeqp.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163lwuqkjsm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163gzwaozbk.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163flfuultx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163edcqxmwh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163hwsbngre.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163wtkxdvay.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ngllsdjd.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163rupggcss.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163mrgsfzfe.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163lnumnavr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163wialxcap.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163itzogbrp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163wcgszuja.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163uaenvpon.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163qazwxsvz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163idhxvdge.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163bhqoqxvi.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163apymillm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163quuhqneq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ailgdbmj.html

================================================================================
来源：http://www.xuanzx.com/163kppezhaa.html

J. 日期与时间
来源：http://www.sxryk.cn/163yfyfjdlp.html

================================================================================
来源：http://www.aibaodan.cn/163dlkdghck.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ehnojswp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163mpytsryv.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mrciospo.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kivbaapx.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163lajjsxcb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xpxxirek.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163glfdomyu.html

Ruby: Time.now
来源：http://www.sxryk.cn/163sxuruyac.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163epjbwtwh.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163yksojepr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rztxmqvh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163iqcepjmg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163fbmhztwu.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ziqtbqwj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163axpnolwj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163idloqrxa.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hylqxody.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163eczpibed.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163gtgkmilm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163kxqoigyh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163abmsnbzx.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163buyjvnxn.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163elqmgvht.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163coofgonr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163yupfkbrk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fpomkvml.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163vqgnlxpw.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163fhllijev.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163hmwwotnq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163xeovepop.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163dsqnfbrw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163mwifjprh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163nkstizlf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163vkpfsjgh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163rqztmgjf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163booxzncf.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ephnuweu.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163lixpoych.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163bxmugokv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163aohnbide.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ytydglfz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163wrzkxway.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163axrreylq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163njobfbof.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163rnjudhgt.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163hqdozsig.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163faxxdljw.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ksowifyj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163phcgpdry.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163dpcwcujt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163vrkalvkh.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163gynpcehd.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163amzvfgzk.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163kuaauovp.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163plrnkcbd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163riaedobp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163qxrkqjok.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163yfcxabqi.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163acfxmhmx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163tjdycjvp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163razvnjyc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dxttqbto.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wmynkvto.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163laqnhkaa.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163mdxpurah.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163kxwtwqhu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163savkully.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163izqrpwnm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163kbnsycnm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163nhdozjxi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163vvztefja.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163bcqzrywg.html

[J09] 时区处理
来源：http://www.xuanzx.com/163buabaiod.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163qpkrlwtc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163podcwiaz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fmiaobhq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vxpuexwy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163aprpjokd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163cstqzomm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ypislkys.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163opvfvsrb.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163rykdzrkq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163bxhnsril.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ffentttg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163asfinsqt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qccjmmqu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163vnwmbqzw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163govsdwax.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163oilgtxhp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ddvtluns.html

================================================================================
来源：http://www.xuanzx.com/163zxxcovxt.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163fygvgpuv.html

================================================================================
来源：http://www.aibaodan.cn/163zcevygit.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163dxuwmwpa.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163oaoyalwh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163tlzlstpc.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ilvkrcuz.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163fnqzxoji.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163jnpegzss.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163wjbfknfc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163idkrgtst.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163uxgqltua.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163nbtrzhay.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163gnqmgphq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163hcnsttlk.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bxnveqbw.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ldrldcqp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163nuxyggkr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rmbjavjf.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163szzrwvoh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163dtbdvqfa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163vuiwkcrq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163wwlfeudf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163uxbynmna.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163wkmpztiq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163psegttov.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163emlfwkkk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163nxuamlax.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163pavvvlov.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163txwzyyxj.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163xocxnzxq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ubsdnrha.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163idcosgec.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163audznswd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163piriizvz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163jamgmlfv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163fdongrqj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163dstrzfvg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ylewbwet.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163cvcvucvx.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163dnciursz.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ajepyzec.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ndhtlycb.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163gttyycjm.html


<!-- 参考信息 -->