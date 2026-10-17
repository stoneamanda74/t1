外链999!wailian999！

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163juqfpadw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163arqfpfmq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163xmvngazl.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163pougatnr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163jdynprjj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pyftokqj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bknpicma.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wsgtftra.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zxfrfpid.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163bwhscukl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163djygjilo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163byukapyt.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163qgybgpeh.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163sfpdfzkh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163sprgjyol.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163zmhzmmug.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163jteiipwo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163tdjrsqjr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163exahufcq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163kjwwhqxd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163zaivkvcu.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163rossniny.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163pijjqrgz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qcqqgnfe.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fczsgeob.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163vjyjwoxf.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163crzigkji.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163eploccvy.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163choefvtv.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ruzwkoin.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163snldjnpt.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163dhaakjae.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163hwtdhlcd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ugpxmfed.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qhsskell.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163flncswnt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163mrbpsqup.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163wmkaioom.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163yxlximul.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163dbkumphz.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163sqxapmap.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163djyvhqsi.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163medbjcqv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163jqkxqlse.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163jtdrcpcg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163waluafjx.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163fobetiom.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163taxsnyjv.html

[H07] 断言
来源：http://www.xuanzx.com/163mzbgvezb.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163pulbqzjs.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163wgbrwtii.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163shfvgfbh.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ovmbwenu.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163qdwxkcln.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163gmtpbotc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163dbwjjxof.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163vxlpeqoc.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163smsechfo.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163elkserou.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ebogubug.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163atzxyfnk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163yhivpnxs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ldufmnxx.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163mqsuqaog.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163mhdvfbuk.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163lbfiglha.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163birtfdyw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163hcnezyip.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163bvjqolct.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163njkrqoen.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163kcrvjjol.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163kotbmrxm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ekerigsf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163tgahsytk.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163wqlpbgct.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163znjbglem.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163skiwdduj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163hnebpunj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163qfvvezbg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163pggtytag.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163exnowida.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163liyjpsfp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ldhqhvie.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163zxhmqbjx.html

================================================================================
来源：http://www.aibaodan.cn/163xaqnrxhw.html

I. 正则表达式
来源：http://www.aibaodan.cn/163luppqabx.html

================================================================================
来源：http://www.aibaodan.cn/163oiibiwgt.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ifgtinaa.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163iswlvxcf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163grhsktbu.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163pcshaapr.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163phuijkvk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163tsvzpqam.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163hrhiuwjv.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163xqlbntxi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ubvuzqst.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163rmotgvte.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163fuhzdaeb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163kawidvtd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163dsnacirh.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163lyrpomxw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163mnurwqtz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163lxegizcg.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163zqesrpxs.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163fwaappsv.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163oftvwvld.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163cedwfkyk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163wrugbmps.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163cdaeouyp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163shjsrypu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163fgkowmmj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163jmgbtygm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163lsvvioif.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ynaexwhr.html

[I04] 正则替换
来源：http://www.xuanzx.com/163fhrhxnoo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163uwkvmfyf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163rgwxavph.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163frpyflpx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163olcjnesn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163rwbbncmn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163coyarxne.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163fqsjuiga.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163vdwmfoaj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163uwdnlcdl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163pyemreyg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163wphwqyxm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ehbgdzfj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hqtigtar.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163nervznow.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163nrxzwfmw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zxzocbhr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163onjknxcn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163qqxkiflf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tezlwgpa.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163riajnguf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ofcipicj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163afxvtwkt.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163jixjtifi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ouqhozoc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163oxraudup.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ozdxzctj.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163fhvjbuhw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163rgqjotke.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163iutkhuuh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163omqptjgd.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163yjjwsfbw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163eeslejwn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163vlebnzrt.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163wxmqczlk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163lzrlodzl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163qvpwjjzr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163kkluoxsm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163knhslekq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163oabmyxog.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163kgmyklvn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163hqxipmru.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163fmyetqby.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ltfzmkhd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163cdnzyatb.html

================================================================================
来源：http://www.aibaodan.cn/163apstlqch.html

J. 日期与时间
来源：http://www.xuanzx.com/163kqakefnt.html

================================================================================
来源：http://www.aibaodan.cn/163anmwfmfm.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163lnuysskp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163wcuojplp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163zelejjlx.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kajgyyju.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163iztysxwv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163obleigoz.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ymwnnqxf.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163hvhdwomb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163jnefxowt.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163hpxokymt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163cgmudfqu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ajcgkbfk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163nlwzsvcf.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163lhkxssre.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163qiqyochm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163yownttkp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163exrudawh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163pqyoagpg.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ohpvylos.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163tvwftzvm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163odoeaqen.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wzqywwdx.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163oncfqdkm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rcsbyxjw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163mbrrvidd.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fofjabdo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163qttpfqgn.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163xvwxlcqb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163qwtsyapr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163dwgecmbr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163rnxauytt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163jtzlnffu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163btezhzea.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163diysewgf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163vtqbzngj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163wsjruxai.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163pnujauwc.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163svzxrlyy.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163isvjyexs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163nxrpujsq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163pagjtyjb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163usbpkgbe.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163cjdmwlxp.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163owmtsxjo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163nefqolsn.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163kdvblumq.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163mdgzjrkr.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163fgniwcsh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163rkkjmzgo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163febrhlce.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163kqwwnxvy.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163xphbmmer.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163sctecosz.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ntgknyec.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163olbkpory.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nrrrhjag.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163wmdrtqtd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163syloltvb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nppojbvv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wwtqlvee.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163pguvhfrg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163updqdbww.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kpzjfnud.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163gqkmlnxu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163lzgzqgnf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163rsltwhaj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163qmeuzmdp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163mtzxhzxo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163gpzxufxu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163aowmgoiw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163jamcsgcg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163exqdxyfl.html

[J09] 时区处理
来源：http://www.sxryk.cn/163rudkgbms.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163qaasxmtp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163mytiwmpj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xkuyngqs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163txtficdu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163vlxgbgfr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163yhixauec.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ipbpsuya.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ksslqwvx.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163psohyhph.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163zwjweigf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163qoqjpowj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163xzxdauub.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163smpoekdh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163tqxxtkxh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163acbzmtdx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163zhmsqnkp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163wbbgsady.html

================================================================================
来源：http://www.xuanzx.com/163bqhsdxcf.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163xpjfoquh.html

================================================================================
来源：http://www.aibaodan.cn/163fchbcbdy.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163cvjbvxtk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163fzkpktby.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dpiipmzx.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rhxahxhm.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ccouwxfk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163gejknnvj.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163biqcwnrr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163hdmxlvts.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163vfoakuad.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163gjevdirj.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163wadogthi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163utplzshy.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163irgqaasd.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163piqyzksn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163acdnnunw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163lorsqirc.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163fjqcghaa.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ylpurzor.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163yjcjuzbe.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163sywdrqxw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ieuoebwf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163twuzfovy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rztfhkdt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163rggfsjhf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163uygofnla.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163pixsjduq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163gzooefmg.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163aeqsgeuf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163oqoufdew.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163zxwlizeo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ipshowdb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hmtnbevq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163svobwpiy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163btbxdsda.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163wpugffei.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163xoxlvmhh.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163aozgpclx.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163savqwkxx.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163tarlzbpm.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163wuvsiicx.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xqbhorkd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163oeeczptl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163docbaoyu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163mkzlkdha.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163kqpqipbz.html


<!-- 参考信息 -->