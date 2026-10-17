外链999!wailian999！

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163vimtoqbq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rzqkkrci.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wylyojvo.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rgaflmqh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163uusyqkjx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163rhjoyvog.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ecoclrqn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163sbzhzuoc.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163zlegdano.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ytigmduh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gcodveqv.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163itlhvgpd.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163sehhvkyv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ktbolpwu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163pnhkoqcn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163pfpkbclq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163bwzyjnov.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163hvovmfnj.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163kqiovgvx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163lroqmowg.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163czafbgsb.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cuelgdsi.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163kctuyzwx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163vynvgzlq.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163dlldipca.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163mjlebjtu.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163twnrskjz.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163xufqbxdm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163adrtgpkd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163bebwrggv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ftpseodr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163loxhcdxc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ffqkgypm.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ydqwgvnf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163tjdlyoya.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163rtavovzw.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163rgsenqcn.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163lselrasc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163shttoywx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163sfheupmb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163rcwjbxrm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163hyhhajdk.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163bbgwubkc.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163hzmoackw.html

[H07] 断言
来源：http://www.xuanzx.com/163dswohzbe.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163rzybsjlr.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163eoedogrj.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163roiomjce.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xcdvlrbz.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163nmliefke.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163upsqncmg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ratradeo.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163umintyeq.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ofetxhxl.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163znwbhowk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163cjedboxk.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163cnvujbny.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163tftoytnx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163lhangzwb.html

Go:   err.Error()
来源：http://www.sxryk.cn/163sfkulico.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163fnqtjewu.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163bgopgazd.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163kfvefkov.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163rvgcbzak.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163aaaclsgy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163kyrjhtuc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163tulhirvt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163yingkqqz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ezztmzlw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163myromgue.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163jmecditk.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163rllreysv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163cijtruzb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163urivvqvm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163pptsfmqw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163scropmay.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163edglilrq.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163mltlzjkn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163qqqctfxg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163oargcwdb.html

================================================================================
来源：http://www.aibaodan.cn/163kgpvgukd.html

I. 正则表达式
来源：http://www.xuanzx.com/163oncmjebs.html

================================================================================
来源：http://www.xuanzx.com/163pitxlnpa.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163nioruund.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ojjbyinr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163yxrfkaii.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163eooxqufo.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163gjocmwlx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163qveytwsm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163lshejeos.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163zbwgfmfh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163gzxadbsl.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163uocbjqxd.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163xewlstzn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163bmyiavae.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163boympoyg.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163llbuqkhr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163livoiqhw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ynhcdmcq.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163fmbfgkqw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163qiitjytj.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163omkfkjze.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163cydbgmqd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163aqhhsykr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163limghwmz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163uoocpbht.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163vflhdnqy.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163mklzwfjh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163qlbaxawp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163mlixpmaj.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163psqtubhm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163aeayzmle.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xhrpprpl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163pfeyuoam.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163sksdvvdz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163lcsnzwfr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163aviaqpoo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163bfglgkkg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ywfahgym.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163rmacjmhe.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163nqolhuah.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ctlcrgyi.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163uxvtxvms.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163eecasxae.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163reozzstu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ntpkkeyi.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ojqjcneo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163utexfcmm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ylrpicej.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163uypisgqv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ynlcdewq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ofyvilyx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163juyfidsk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163vzvwpjwf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163hqaktbvr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163xjnttnpx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qggfnnkm.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163sirwegky.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163mnjnbsbk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163lkonaxxa.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163sefnyfxb.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163vbvlfwfa.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163vzprzexh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163zdgdzmeu.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ecpdxmac.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163oftfodas.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163tmnijzho.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163cvyntvxj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163oiikymzk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hokdttjh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163djmpulsf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163wlxzvjbk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ltzlvcov.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163jwukjppj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163twozsiex.html

================================================================================
来源：http://www.aibaodan.cn/163ftjfmdpu.html

J. 日期与时间
来源：http://www.sxryk.cn/163oedatpwh.html

================================================================================
来源：http://www.xuanzx.com/163zyodekzg.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163arezvwxi.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163siojvmen.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hjfowhrt.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qyadatkf.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163byvhtznv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163pasxkxtw.html

Go:   time.Now()
来源：http://www.xuanzx.com/163mkxjtwvb.html

Ruby: Time.now
来源：http://www.xuanzx.com/163epipeuxt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163nixxjkbf.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163rvhjqohk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163skkjbfyb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qzusbqfs.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163swnomvaz.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163efypyqew.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163wnkvwrhg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163basipavv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rwhjsdry.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163jrzgomco.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163xgluoswc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163nnhvnowy.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163sfbapgtv.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163feilkphi.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wthuzugx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fkkfbwew.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163epdmsoqm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ajctfine.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163dcrnecoz.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163nzjkxzzj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163wlbehnmc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163vajmlhgr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163zwbzqjyb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ayeuvcrf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163iyibsjfd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ovbrujsc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163rdkzicoi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163boajfbam.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163tswqrask.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163bzxwwfff.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163qguftjli.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163civgwaqy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163fkjsrvwj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163klsuyosr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163aewuqftc.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163yroitptx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163tbuejlgv.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163gfmbqefx.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163xxfhqoxm.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163uiajzuyj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163clstnurg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163hsfjnlgz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163yynsgwrx.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163irwofznx.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163refrwmay.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163nwyoleth.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163eeokvqbg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163iallslmo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ahmgfkyp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ctnynljg.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163uwahnpfu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163tbsrvdkk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163urqlgxsv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nexvbser.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xhhfdwcv.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ceweuzdj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163fumdmiva.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163mhhqunbx.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163brkfjwra.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163deeehlcj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163syupsstk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ykrzzjsz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163zghtrdta.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163qiofehnq.html

[J09] 时区处理
来源：http://www.xuanzx.com/163qndtmxur.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163byppmwvy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163fsmkylve.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163tbyfmccb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163icsbkqqr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163dxbycgjp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163xnpskjbo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163qqcgvmxh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ghgimwmf.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163fiznmttg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163mvumtsoy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163hdooqmjo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163gdgxxcjz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ffokhfyz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163fpqqxptl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163dfesfvur.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163hihxfdig.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163cjjdmmgd.html

================================================================================
来源：http://www.xuanzx.com/163ocubdxpj.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163qcfnsrtp.html

================================================================================
来源：http://www.xuanzx.com/163kwosyanf.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163tljpixxe.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163iqgqqgkh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163nmnbvnhx.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ghvfixtj.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tdsoftvf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163hhjvtari.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163npqbtklq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163xdqvcawe.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163mbqyxfpz.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ziejstxj.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163bvjslfky.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163sgxdwrre.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hxgpcxvb.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bspffydp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163rrvemvue.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163apqrltcx.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163wwjidgqe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163nodnkvgf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163opsshcbm.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163orhqdaxf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163pyknuysn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163pmnbpxin.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163oimsojlg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163xkotikeh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163zhpoxbmm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163dtchaqsa.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163gnyvohdk.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ltuiuyrw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ixiqpmwm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163riadoxkc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xgkclvce.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qksgdtyy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163nmctsvrh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163oygbfsyn.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163xuappakq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163lxdtubpq.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163mhimubfl.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163yawwpevw.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163szkqgovr.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163yrkziyat.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163bxhhlvhu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ponbfgqh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163cbvluhxd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163yjjixlsr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163yflcphgc.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163urfxgmgf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163yslttrmc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ixfdjjor.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mstliwbw.html


<!-- 参考信息 -->