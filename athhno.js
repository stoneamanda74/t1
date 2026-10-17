外链999!wailian999！

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ifbspuqj.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163fnrvfjnk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163lyqijrux.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163beqzprcb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163gxkclynw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bvtpdccu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jltysshn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sswlcvmx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wrnzrssi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163pflkqrpg.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ltrzftvg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163byvachlj.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163dijtazkw.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163wpsfurpq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163hjytynad.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163cpgfpwfn.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163chpygipp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163bmgdybwe.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163echvqozc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163bqsvouyy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hnyihkqd.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163whwcttcn.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163nwpmiqmh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163moegqsyv.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163eyvawhio.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163omsmcarr.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163nxjzkcda.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163seslzzrm.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163fqrbxqfc.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163kmjcgrtk.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163sjaiaxvv.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ngcncbab.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163emllxqzk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wruzdxbl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xfsqzjba.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163symloyzl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163xdzyplzg.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ufvcqqjr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163kvihzuvx.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163pomsfnml.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163cqctvuuh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163gfhkwnla.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bohaspyi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163oyivesuf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163rbsjyizy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163aytevqlz.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163hqlfjezi.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163cyvunwfk.html

[H07] 断言
来源：http://www.sxryk.cn/163jrgtgnne.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163oidogkrb.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163qicrvovf.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jwlyrqww.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rrwikgpj.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163zamfhcnr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163gjsytkrm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163lgcnrbow.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163iabsmdje.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ojtamgcl.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163nlhqtmrj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163vzawihoz.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ovfkczcr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163hbwlmqtk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163eswbnfph.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163jgafcbri.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163lqvglnma.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163bonjcghb.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163rudszxie.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163zftubgva.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163hangqibf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163didscrqg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163gdfeyytz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163vopoxkas.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163nrvieghj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163oadzvofg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163avqzsvyd.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163djpavcku.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163rqwazalq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163swxdyodu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zwtjgbuu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163kbznmqvs.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163xgzswdal.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163mjubnpgm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163xdxefdwi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163kpfhxqwn.html

================================================================================
来源：http://www.xuanzx.com/163yhfrlpqw.html

I. 正则表达式
来源：http://www.xuanzx.com/163drvyqudi.html

================================================================================
来源：http://www.aibaodan.cn/163gqvhivdp.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163nopkfhpp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163wpogdbwl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163tiomdxic.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fshlbynv.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163mcdlfmpr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163sayhekvk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163dohhzlob.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163upjscgzz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163kbxsqctw.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163laawtbmq.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163csjficjb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ozpshrjs.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163kmdsdhzx.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163sadfanrc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163vhzkonca.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ybepdqze.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163kxfpeaku.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163xpqyleki.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163hkdxdtmg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163qlbceyao.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163fnqbdgev.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163qrtjmlub.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163zfqumkll.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ifzcemaa.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163vjfjqgkd.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163bpcghvip.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163rfiomezu.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163vuabjtrx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163bdhzqubd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163kxyngryi.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fptywysy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fhqeucjy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163phizznpc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163uhjxdlfb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163pgjldyde.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163nlgaachb.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163yycxtmbo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ieubggio.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163mxmkerwo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hablehfe.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lsbrxjlf.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163rvvfsbdy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163bxsgdmch.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jtqbimio.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163xwuspivl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163hjvjqcym.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163smfdbqsz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ukqadlqo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fyypoicg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mkjbjpis.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163utvdrmlu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163chpugszr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163smtvttry.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163rqctewzm.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163domjfymm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ruqltntu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163xcupxilp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163wqdfeawd.html

TS:   /error/gim
来源：http://www.xuanzx.com/163chtbvali.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163baxqbenm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163tvmxzbcm.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ejnpufdb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163fxojdthe.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163fnvleeiw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163azzyqylg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ecuqbsua.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wkmnmgcm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pevzdngk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163efchjiqt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163erakwpev.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163xmranumz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163lababzki.html

================================================================================
来源：http://www.xuanzx.com/163yuoajrtf.html

J. 日期与时间
来源：http://www.aibaodan.cn/163jgwrigyn.html

================================================================================
来源：http://www.xuanzx.com/163krpqaeyp.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163bnitihed.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163femcjyxj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ypytomux.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163artjawws.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rdpcwaos.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163lszatqhk.html

Go:   time.Now()
来源：http://www.xuanzx.com/163jsuyxvxe.html

Ruby: Time.now
来源：http://www.sxryk.cn/163gxrmmuvp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163gawkuerf.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163yepuvbsm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xwfluyjk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163dgziyexb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163aodmhgbe.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163kovveikc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163nixpvdjy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ynvtzjup.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163lqswpzgt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163scnmkokb.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163wxxgvyqr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163xdemgsay.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163dxrteztk.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163pbaqkwfg.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163nwogxjif.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kynpupjn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163qpfpfrqi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163xgzxxazb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163pasgeleq.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ivbbqkhd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163pigxgkqk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163owfjxhwz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163obujywqh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163gzwuzbgi.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ylaoqtjn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ywzlqrts.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163efpqbxwh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163urjmdfal.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163byycgbnb.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163byvresfo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163uzpsxmjy.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zecocgmq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163cxdtmppx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163osjbpgoi.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163rhxvhrqo.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163yfgdbvur.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163nzmalumr.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163htavuahw.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163pundypew.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163tbozfypr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163femuavif.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ozhveoud.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163lioxbkkv.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163rxjtoeto.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163zqqtsuhv.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163plsqscpk.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163fhcpjexj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mkoyqfnv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ppzbekov.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zrvmmnei.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163pmmavtnn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163jcjstrvj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163vvvzfhhi.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rdngszph.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xfzsgant.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ddlseemi.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163lbibdqvy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ukspftxb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ofzykqbp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ifzepdal.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163xiphhxhw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163knyltweh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163qipifbyu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163bywfbayt.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ewvxesaa.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163jtaktbib.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163kocjfxty.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lcsaagwh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rsdengox.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163akevvsad.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163phstkksw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163piheyjjf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163gdtrxjyf.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163spjmmrpv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163zzjgkdbx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163imwzwdya.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163axnarral.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163eetvyhse.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163oyxpbnmp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163cftxpkyr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163cxnrcrlt.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163coyxznih.html

================================================================================
来源：http://www.xuanzx.com/163awgtptgc.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163hwqefncb.html

================================================================================
来源：http://www.aibaodan.cn/163fpssliob.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ldaamlfj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163jwzizwua.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163fubjqnur.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163bsjjkwdf.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163yrdcvisb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163dukujuff.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163cdwemmyi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163btqykmhh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163yyhcntog.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163bsrzgegs.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163wkgirxdg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163aqbmxdei.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wqeexlei.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163cqtyjwyl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163kqrbknwr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nkkwwlwj.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163yvuwmacu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zztriaor.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163rbhzhxtu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163blazkcot.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163erxkpruz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cghkqysn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jtoudrck.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163aaebgolp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163bbhcptyz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163cvtandhf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163lxjcylde.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ivwstdbe.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163dkqlmqxd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163cfjnssnq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163bbxxttkd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163hbrfxxxq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163rskfxrja.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qzedvmri.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163enobydqn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163qpcrlzzc.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163swwmuktn.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163gtbveekd.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163uqijolrx.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fpdtzffy.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ullgblvp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ekljvwva.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163nfufryyy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163cvylklgj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163cxnsbwpz.html


<!-- 参考信息 -->