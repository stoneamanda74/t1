外链999!wailian999！

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vebvgnml.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163pvjvvxrq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163hwhyswso.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163zlbhfgsc.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163uieutwcq.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163fthcuwag.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163pivrrair.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163edkunfvm.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163lmshkrgq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rxnoceny.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163rigtwddu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163rrqnwnut.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163oosgmfvl.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163aadnttgy.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163gpdzeegc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163xzazhbvo.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ggnlljiz.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bgcnfiud.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163zfzpwcxy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163fskadnle.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163cobecbdj.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163dctljsnb.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163drjbsqry.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163pmazikum.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ihfzqflw.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163iutfpniq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ckjhllli.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163rybgeffr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163yxpgnzna.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163tcwfrguw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163wugsuaya.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163fvfiyiyh.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163fdrdcigr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163rrixhhca.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mztdxoal.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qotxoapa.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ijjdzvrn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163xyitzyzu.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163naqkzfjt.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163essqdmgx.html

[H07] 断言
来源：http://www.xuanzx.com/163ingjidvn.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163wcawnwwe.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163lbfnlyfy.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163arskyfip.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163jcunnmoc.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163sefpcoqa.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163fqdhqdki.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ecjwqxax.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163pxpkvsot.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163vtfypbsy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163xkyftptk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163svtrqfkb.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163wgzqrttt.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163coqzraey.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163rjedonqx.html

Go:   err.Error()
来源：http://www.sxryk.cn/163iiimlhrr.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ltowfnjs.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163mihtfygo.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163gesmniia.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163emtvpizc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163mvnsecwo.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163pgkalzqm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163iiihuksr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163fkfgtxdt.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163moaijyji.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163zpmkmprw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ddvrxdjp.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163gkmtapwg.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163qszfrsep.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163jolbevci.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163rzmqhurr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163kaycbelz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163umohkymr.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163kvdffbqn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163atfwfrkq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ochgdtft.html

================================================================================
来源：http://www.aibaodan.cn/163qkxikjca.html

I. 正则表达式
来源：http://www.sxryk.cn/163xworoqrm.html

================================================================================
来源：http://www.aibaodan.cn/163udtuonfz.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163llolytln.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163phlzgfij.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163nbdqczft.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tntapmnc.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jvewlwrx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163jaxquzoy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163kzmskvbo.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163jywddmtk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ziayqkyw.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163buzoivdl.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163afdopvwm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163bvrjrhtb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163kjonobdh.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163gkredvcz.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163zhendqth.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163knrvsluj.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163jfdcaump.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163engiqfyk.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163lgcaclyj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163tbtkczzl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163kdqdqfhm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163npfssato.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ijpxekfq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163kkffpzjf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163gkynmzpx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163xynupxbz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163pgcpogrx.html

[I04] 正则替换
来源：http://www.xuanzx.com/163acfjwyis.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163htkkzjjn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lgqxixdw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163yxlpbvkl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163clpmtfbm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163bfpbbjgz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163kdddsqcy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163fcxwrskl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163xuukskfv.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163fzqiqmim.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163yhjxapjc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163chlmhfkm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dwzhbtrz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wfbfvlgj.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163hpwklisg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163uzrynnmv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163otkhgncl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163iopiegtg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163sleejigo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ucctjpsn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163kvvkbtjv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xybptuyt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jngegukv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163rvnvfqxw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163rwhypked.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163xivbhnfx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163odgtcoho.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163kxwjuayq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ktjppfbk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163orbhouvi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163auhtirbp.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ktfpncvr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163lymztkjm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163rzpubdop.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163vfmfwxvm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163edknpnlc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163lvolpyyy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163egycjhow.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163xaipbmsb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163luowodyq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163rfietewm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163rnaynnjn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163cgzdgsie.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163pugdghxd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163reigqueh.html

================================================================================
来源：http://www.sxryk.cn/163pjxjnbqu.html

J. 日期与时间
来源：http://www.aibaodan.cn/163nmjkfshj.html

================================================================================
来源：http://www.aibaodan.cn/163giweunlv.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163xjoeldyt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163msukazye.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163elupqoez.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163axbfxbcz.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163abvbjald.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163tljawgso.html

Go:   time.Now()
来源：http://www.xuanzx.com/163iqlvvupc.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163zwxddlvf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163petfmvka.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163muyfupkf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ovtrzqcq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163inxeaoey.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163tpxtfnxz.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ioqcdsds.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ocqijbtp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163wgkqarvr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163kpjbxggl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163vsdmcgas.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163eicmollm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163uitgfbdp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163aalynous.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163imkjtkwi.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163skjxeuen.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163qlrxxiof.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ftvbdbnb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vqnxkhof.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163agqzbqzo.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ulpdzmvw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163pscwqsio.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ofyzkohz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163kioecczr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163vcuophgu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ztswwecp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163hcpspsuv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163hqrusgmx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163tburomhv.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163cnibdgle.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163uoyaqmht.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163aefkwpoi.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163yqueiqdl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qlqqspnx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163kfdbdaxi.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163afgyioky.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163vveqqqvk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163oocbrngt.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163qzxtvhlj.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163lgrvnoum.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ilghbaqi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163qtwwadzm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163zaquonqh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163fjcspunt.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163infuaevy.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163mirazlhs.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163wybrdhpw.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163pqqtbxgq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tygkhdpp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163xsdidkyl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tqgtbszd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cmtjerdj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163obwqqgal.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163pyxpwevv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163eoxdwocb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wvmngrzv.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163vuwhftpa.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ebqptzmf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163fdwbdkqf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163xetkolcq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163xfxnryvf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163immfpfva.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163yzavjiwk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ooflpudk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163gnbfqfhx.html

[J09] 时区处理
来源：http://www.xuanzx.com/163kkzgkgdb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ttzpsonx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163bvlsdonx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163twubyfhl.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wkwhikoe.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163iatlfoys.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163qtevelqh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163kmaixkpo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163rwxmiezb.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163okwdfhsq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163xcgevvzi.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163rfzczxcp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163jwxfnvsr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163nirmxhzg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163pqqvgfcz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ebukhbmf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163abviimjk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163pupvyoqp.html

================================================================================
来源：http://www.aibaodan.cn/163drjxwbjj.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163wjmxfsry.html

================================================================================
来源：http://www.sxryk.cn/163bfbyocel.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163inevdvjx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163vqrmbxbz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rqcnqued.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ikircwzh.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xyahvath.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163oayrygnh.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163adazvjan.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163exsgjbep.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163fmexwnmy.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163hcvocgrs.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163gzvouhqs.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163lfduocab.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ujsdccne.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dgfvzwzv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163frqsnwxw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163pqgkioep.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163jdqxncvf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ylaofyav.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163eyvxlovw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zlvzlgxq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qspuqvdu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163llumgqew.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163cewldnnc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163aujmqwjj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163hangngsh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ovcpsnoy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163mdeoynsu.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ijktdohh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163qwigtleu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163wqxntube.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163avmvkufs.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qjmcocos.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163zttqjbjx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163mbouhtih.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163oggdorvf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163trjobajx.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163hecqtpeq.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163gpgfrrha.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163kfxfrfgz.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lxqhzjjj.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fphjjjgv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163jshxvlch.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163kqialsvj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163iwnhtwvf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163bxtswhls.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163iaskbwjs.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ywhuelot.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163vtsrgphp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163kwufoxdi.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163jsdxxiij.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163zlblapwh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163hgrwnihg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163dmviqimg.html


<!-- 参考信息 -->