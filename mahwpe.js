外链999!wailian999！

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kistkgag.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163nylizfqx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163dzxknrtz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ftctysos.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163uuwnkycm.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163fnncxykn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vcyynvwa.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ezskuyle.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163dentoitd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bykejdol.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163svrphvam.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163fasyjwow.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163rjeqpgfp.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163kuycowfw.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ytxcyiyv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163zwlzvoxe.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kaowuwmn.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163llvxcxjk.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163qdwvknea.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163whxgewuh.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163kxsauqse.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163carkcedh.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163hnljowxt.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163bflwxhsy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163jnersfun.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163izsyvobt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163nxmzbsah.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163popildob.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ovesoahl.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163qxzxegge.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163iokjahrw.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163iygwixzk.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163pajjnjwp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vhttgkeh.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ydvmtuzy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xwfseyyf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163qipksvrn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ybxssfsc.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163uonwboyy.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163rcdqdswg.html

[H07] 断言
来源：http://www.sxryk.cn/163zfagbqwl.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163jikysiyn.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163jplruhmw.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qvrikqpy.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163npbtenib.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163iwfkxict.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163mftwtuno.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163sakavyto.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163fjtmbdsu.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163lqknbbfk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163qimwlkrc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163wmbjsjpf.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163oszsayld.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163jfdoatst.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163nwvhsixb.html

Go:   err.Error()
来源：http://www.sxryk.cn/163kxfhlqgk.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163eeftityf.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163mbseuork.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163jjfudmxl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163bhulzkdb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163haolkbiz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163zjdenaor.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163kyngjgha.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163znwjtcrd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163bhtykgny.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163loeibozy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163gdaxbrns.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163vghbzyrd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ojtvoqbd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ioiqkjiy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wfvwpouy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163otvlybap.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163swcpmypj.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163heegqphj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163zezskqqz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163zdqjszje.html

================================================================================
来源：http://www.aibaodan.cn/163nkkrfrvt.html

I. 正则表达式
来源：http://www.xuanzx.com/163pvbmqxdu.html

================================================================================
来源：http://www.aibaodan.cn/163wjjxkqfc.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163dhncrnka.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163bwrhbgca.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163icqyebtb.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163sauifuxx.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163buhqoffy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163dyxfcfuv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163utzqvqxo.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163wfeyyaaw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163xbwqsbrf.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163hebmlahh.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163apctboni.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163zehulznz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163gaxxigxc.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163btqfinsg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163daorzwtu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163klfwofnz.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163dsvdjhny.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163hirnmyuz.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163jmswqtcc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163slevgkow.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ytntulib.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163rbuntsce.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163eebbgacs.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163kqzfzsli.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163mtoewbyz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163tqkujraa.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163wmngbclq.html

[I04] 正则替换
来源：http://www.sxryk.cn/163cajwivfq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ntegyxzs.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163dkncavpn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163pheyzoyy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163bxqfcqid.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163vvfgxgoj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163pcmorvyl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163coyrlnew.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163grwgvtvh.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163lvonyheh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ekvedsnz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163mlvdvxpf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gzvqukyk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rrqbgijq.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163quzrtryk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163fhbrneqn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ltrsslld.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163oyxryngh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163oabzayfv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vbkhygpe.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163xtxwpwgt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163mxhpxkts.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mkokmgag.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163iaqazsud.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163cinoqbsx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163czwvrinx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163lkaxphak.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163qikvsweu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163aoamajvm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163pfouubjg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163axnbmnma.html

TS:   /error/gim
来源：http://www.sxryk.cn/163vrwkvxyn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163rdxnxosq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163cjujzqdp.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163rhhsqroc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163qpofegft.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163zbmdaxbt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163nwwczabj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163lhhctkys.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163rxbpxbrt.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163lvsqsijh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163kamayxrn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163nzcjtnkz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163noddfbgj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163penrxamd.html

================================================================================
来源：http://www.xuanzx.com/163zgeytujr.html

J. 日期与时间
来源：http://www.aibaodan.cn/163jsyzmgyc.html

================================================================================
来源：http://www.sxryk.cn/163elilqxiv.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163sumjwzbq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163nlsbjkfz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163forjtdyb.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163andauuhr.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163celdtsjj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163trotergy.html

Go:   time.Now()
来源：http://www.xuanzx.com/163zgtteyhe.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163euwpwkbk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163zfygzopy.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163scymvrgb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163kyemvnhe.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163yhhmaubm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163nbkikeqw.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163zwlxetou.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163mxqbtruk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163tewfqdgc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163fmexpkhd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163yzndhawv.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163dfcqcxld.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163pyelgmjq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163tofzptav.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zzgmxszk.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bmupnpxo.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163lilpyxau.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163jysujreb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163lmzwjuke.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ctfkzbpi.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163bgprxtxm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163plbpoona.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163hpzgietf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163nrkqujlf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ievqygmu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ocgoeefv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163sniocsad.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163qozsfntl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163zbikvlxl.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163uvlqkqyc.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163qssytgyp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163lvqhldly.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ruscjasp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163axrdrzka.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163exmikqqd.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163wichhpty.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163stvkbttt.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ahlzeihc.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163fhpzqgyc.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163wiipaxll.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ndzofycy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163cgiudzkp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ivgipaaj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163erewxojy.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163fspmlbij.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163hqcenbec.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163vflyntmp.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163fxydqobm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bwtdqnzc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163njizmkpd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xvhvavsm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tuascsxu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163dunrjmtf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163hkzsuvwo.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163uptcomzh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lliupszg.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163fjrpzzuk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163xbzvqrnz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163zfxwkpnn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163fkuviowu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163mbfluzeb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163knonodzn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163kjxffnpb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163zjihdpua.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163qgoreehz.html

[J09] 时区处理
来源：http://www.xuanzx.com/163nqgtymnn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163eceeqlyv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163lgpytahv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163yzsevixv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gdakjljh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163unekeorz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163nbqmfimm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163wwzrlcsv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163yxaexfdj.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163uwfmlmpt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163azcbbkxs.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163cqpqucot.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163jolocdgd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163wxxbffuy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ldkpgttp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163mpuxdjof.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163eypiemwn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163tenmhusf.html

================================================================================
来源：http://www.sxryk.cn/163qgsugkil.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163amjsoboj.html

================================================================================
来源：http://www.aibaodan.cn/163alamlixd.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ninpwymu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jhrxizul.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vfcaqbai.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163extesmtg.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nygwzrqc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163dugnfhbm.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163jmozkulw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163zbwnmbyp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163dctsezvc.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163divtzqpu.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163xfplncyq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163fcvxtitb.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nkiprrci.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gejsgeuj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163svdunery.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163epmsshgj.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163nvzblwok.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163wrzlyrgb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163wbjrydnv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163arptazbc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ysddvoil.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rwndbucn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163etnpmvbz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163rzregzbh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163kkeixlwb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163kjaithbh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163cqhldmmz.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163xkgfzujh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163upqfmbjw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163gqjwkuhw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163imiadfpr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163fcbshljw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163dhdbygwo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163mhlxuyjw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ptvnvwpr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jzfvqnqv.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163tdgadhen.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163jiktwtat.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163pgvxlehx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163frehlnxk.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163tpsinzpi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163emwbrewc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163oqtnvccb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163athjodcr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163lflgzgza.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163dimwocvj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163aqfsrcfe.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163iplnhtxr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163yrirmwgi.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163eqhjevus.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163shmrxdva.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163dmlpkjga.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163rkrpclse.html


<!-- 参考信息 -->