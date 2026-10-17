外链999!wailian999！

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163jqtkvmju.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mlzxaeik.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163brxwspxj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ewyovlea.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163sdkvjdma.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163lwwsluyk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163fbmhrrzp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163dylkuygq.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163eadllnrt.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163mhjylbkr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ctbbnqzv.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163kpaizecd.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qcmaofbt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163jfxvxoim.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163whlqtzbq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ekufsnlm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163exgqvepr.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163garnlqvv.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163hnntlcjd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163himmuyga.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zbucjyeu.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163omwxwgzk.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163reeplchi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163edhmhirl.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163eisxeami.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163kasypudh.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163oxuvpaxp.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163lsibcffz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163sznazrkx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163aibzwuvc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ndllzdao.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163tvukzvga.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163fakecnlq.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163dveczsua.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163hquqjhnd.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163thvigrak.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163inedzlvr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163imetcfcm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gdbnhabr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mmrchidq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163dcpvsyva.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163sxoogrxz.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163crpmlejq.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163wustbysg.html

[H07] 断言
来源：http://www.aibaodan.cn/163vrniegyk.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163jaifvmuz.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163shvjujtd.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163yrvlxgnp.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dkypwxet.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163shhaeqvg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ojufcipr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163hgmogius.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ikzkverj.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163xxierdht.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163wnawkltt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163rprltgpn.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163dwwndsmu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ddczntcf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163dvfduoqw.html

Go:   err.Error()
来源：http://www.xuanzx.com/163yzmrcabf.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163iyzygwzb.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163vhqxgoja.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163vhwmymww.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163qjazsrcn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163jswscnac.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163btkwjlgn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163zcofvglo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163krpkvbjl.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163vsrvuilg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163dpyuqsba.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ymydbnes.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163siitznky.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163xwzjdemx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163rvtiazif.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163upiuaeym.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163btdwtyaq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163slfcrdyp.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163fusxugvf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163wpudgygh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163rhuaiqjs.html

================================================================================
来源：http://www.aibaodan.cn/163mlaniirm.html

I. 正则表达式
来源：http://www.aibaodan.cn/163tjmhnkis.html

================================================================================
来源：http://www.sxryk.cn/163xgofbmoj.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163hjgkqmfg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163jgkcymha.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163vxktchhh.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163owlbhvbt.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vixfextw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163qvhyecsx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163atdfhwck.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163vdwnyrex.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163xrthlmxy.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163dqiipvdx.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163yjtzgwgl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163jxrcpfmg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163sqbvgllb.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163wsilwzbk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ihzjwsmd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ynwpekoa.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163kyknokfi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ocwtoxde.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163sjwpcuol.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163pbvunqru.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163iijnrlia.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163yzfwexml.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ynmberrm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163eawgovam.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ocgfyajo.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163irlothto.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163lmliclno.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163hixiqmsz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163aedqaoza.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163khzvdpmj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ibbkyejg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163shfixrxz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163acushhwy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163zkwvxxtc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163hhtlffji.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163kkpnmico.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163iydenbds.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163buycrurb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163zetjdpgy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163breulzyd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kvyyqklu.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163gpfdeyvx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163bcauuozf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163umbskpja.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163bosqigzc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ppjjlpuy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fatqwirr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163lusojren.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gyockvsx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163pcrnxawv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163sozibkfo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163afmnzeew.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163lodezwrc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163mtvuqeyv.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163rglmvslb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163oopejrgb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ukdkwdfv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ldbdvtef.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ulivohzi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163yfylugft.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ktmmecna.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163sapydgml.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163nxnozrde.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163umnmngrk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ywzhafyh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163cgrpxehm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163zyelplsz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wtthaogi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163zwmcqmpv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163rqdppfyz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163zhxsrbmi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163bfnyfofc.html

================================================================================
来源：http://www.aibaodan.cn/163jfwdngfj.html

J. 日期与时间
来源：http://www.sxryk.cn/163ajyjsbbb.html

================================================================================
来源：http://www.xuanzx.com/163xupnppqx.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163auzibopu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163bzckxnqj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ziedeamk.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wshwasxa.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163nikwipmj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ngrivngk.html

Go:   time.Now()
来源：http://www.xuanzx.com/163jtthuimo.html

Ruby: Time.now
来源：http://www.xuanzx.com/163hnmqusro.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163saizwxrd.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ypuoysni.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163npdtzgbb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mfhzofhz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163jybcwiko.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hrwhcckg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163abplqygd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163vgwrraxz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rhmnamis.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163dpobcdpd.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163qtztiboy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163jcfnsjyb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163apmkegqj.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mdcuchxw.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lyoqfiip.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163iscjlnci.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163fjhsxaaf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163veafuiid.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163wxxxhkbs.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163zxphzfgm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163udmnmmkz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163vixeiasc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163vibywgfw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163lygmvumz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163kvmqfzgo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163mmvppomy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163kqyvylea.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163bauoprnp.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163dpxgxryu.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163hehffjsz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163xdywegzz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163taknesga.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163iuxwuqtu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ozohyugw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163cfqlyojx.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163wwjrului.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163qgcweetc.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163carjgziy.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ftnmlmka.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163eqnkvnwj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163lzxvirvo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163oeuiqhut.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163kwxdplpk.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163lcfmgmrb.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163efxmgldz.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163qektejux.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163pmrviwjk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vttyyskl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163rurhdett.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zolcmlim.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rqsjjqlw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163qaiyyyab.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163jqmipulr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ytjwteym.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fibjufds.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ojywskwu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163vfhipzjb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ridedzwb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163pinhfciq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163bqzqtyhw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163rllxfbae.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163wshxhjmq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163tgankulq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ahbcflnf.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163tgefjnrm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163wxvnurgk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163tswyqknu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163scyhbzdk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ozvhdjmx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163smaamzin.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ljpttbut.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163tcmwpabr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163tfbzqick.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nitzwvzb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163pggbqnrq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163znobthdk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163hrvenqcb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163arfeconl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163nvmeywiy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163dbsserbo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163nlavohqq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163eplviaju.html

================================================================================
来源：http://www.xuanzx.com/163xxikrdhx.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163gwiyzbvs.html

================================================================================
来源：http://www.sxryk.cn/163ditwfhsp.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163chemcroe.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163laaaewmr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dghzyqsu.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mizgmsob.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163stiatfqw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163bjhvnnai.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163xhkmeeoz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163bnnakdqt.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163lglxdsfd.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163xsawdjeb.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163lyfxavbl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163zwywkkfo.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wgsggxmn.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ibtvjyef.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163oxrfylvu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163eeaklusv.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163xqnhekpx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163yqxhzxyx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163wjnabknd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163shdiptua.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163iabuocwj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ybaasmbj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163obgjcipu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163pwyickvf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163gbrogycu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163fqelxjiz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163orejhziz.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163gygyqbjp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163nfqqkyje.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163wcjdbqxy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163eubqdkrx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wardpuok.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163aqobvpqu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163sxnkzfnf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ztnfxund.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163nytesekb.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163bqvqpras.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163skdoknmt.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163veguovqy.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rkcbdzok.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rgnyobub.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163xrxvazyp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163pandexmd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163rkftwwuv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163qhgghdck.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163qqrwoezb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ljzefimm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163bystjiyj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163qxogqync.html


<!-- 参考信息 -->