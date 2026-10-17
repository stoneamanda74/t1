外链999!wailian999！

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163qaawqemh.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163xkoecijf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lstiyntu.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163fyzwwsbw.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163awiejqib.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163nbduamne.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163yxthtykn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163qoocsjyz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rzaleolu.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163swxurixy.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163qyqozymq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163jhmthixw.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163srnupbsv.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163quvhdtvl.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163jwfetnxf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jehvcvfe.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163zuqiezgd.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163yecggcmi.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163lxlvyjui.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163uubrbrqr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163vlfurgxl.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rgnnrwde.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163hhqimgjr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163kqyvibck.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163okahnxei.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163fktkfbcr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163snfaqcqs.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163zxfooval.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163xvetefgl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ygeepogm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qkngkkib.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163sbilffzb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163phanqwgb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163fvcrontl.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163pvtcxffn.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163zehydbdl.html

[H07] 断言
来源：http://www.sxryk.cn/163yrhdjddk.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163hofusoja.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ggjlcffl.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163gybojggz.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mctlzajo.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163wjtijldy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163waskefkb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163pcivtmru.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163vcstsyvm.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163vtmegcmr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163npiktuzq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163gkacrejo.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163tmrpcwtv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ksibvqiw.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163bvfgmyjh.html

Go:   err.Error()
来源：http://www.sxryk.cn/163sewlnxmn.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163vwmpfkgi.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163rswloaag.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163bpsnlcxj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163pksndnqy.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163aycfyooa.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163vkbsfsfd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163fsrtkcuf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163sufwzarq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163japxgvou.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163lfaairrm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163mrsvccgk.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163shmxfoaf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163rfwbkyzg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163uyhexuxn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qfjbcmln.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163uuzogrxp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163zrwcqrsf.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163agxkbgdj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163okjqhlat.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163tjbsuxoy.html

================================================================================
来源：http://www.sxryk.cn/163xinbocku.html

I. 正则表达式
来源：http://www.aibaodan.cn/163jkhpbwkd.html

================================================================================
来源：http://www.sxryk.cn/163fxbycnoq.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ewypheoj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163hvkeilfk.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163iznofqyi.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ngmgvruy.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163pekyceom.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163omzntznf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163mgomrnwi.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163tmyahicn.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163wlsoxjig.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163utuxcrsz.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163kxtqwhie.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163plonguir.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163gnlwqksa.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163mjnbwohd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163bfisxdkx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163hsodazsm.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163xdovoaoe.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163tmuhdsoj.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163fjpelpvv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163zuyhkxjk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163kouufnar.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163mljqzngy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163szwijbdd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163bnumjqug.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163rsvlwubr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163xulfmgcx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163jqefckad.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163byrrslez.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163sbfarpdo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163najmltlu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163eqbmpdkw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dtapmlhv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163zftmciau.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163jhtigwna.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163johjuvhq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163bskkains.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ehhzhznv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163udnaqaos.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163gngfulmn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nusjdhdz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163igjgtytx.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163yrsatqzx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163riliyoar.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ztoznptw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163zscwibah.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163znevnzwf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bkttguam.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ihcljvvg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rpzkcfmh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zzekoruf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163kgrajnvg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163awcsnfea.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163oykytewg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163pkbievts.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163vvlwgefa.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163cpskdaqk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163jovkrfza.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163tvxfmgqe.html

TS:   /error/gim
来源：http://www.xuanzx.com/163oeujvaib.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163oplynprc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163bhkrkefy.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163syrrprwk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163xsnkdadv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163erqtfzfl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163odpexmgy.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163kvehvygk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163kuaqdqeo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163gvxjkrcs.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163zrwngxkx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163vtwyhysw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163tcvyifzq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163uytrqnpe.html

================================================================================
来源：http://www.sxryk.cn/163fkgmjajv.html

J. 日期与时间
来源：http://www.aibaodan.cn/163qcwgroeg.html

================================================================================
来源：http://www.xuanzx.com/163yajymdst.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163czxceiph.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ygznxasn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163imstylos.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163lmhccswt.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zztefami.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163rylpeicp.html

Go:   time.Now()
来源：http://www.sxryk.cn/163tphcaohq.html

Ruby: Time.now
来源：http://www.xuanzx.com/163bcgospgr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163mptksaku.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163cmjthopf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163vyectdmw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163pmtwitpr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163uwjaxvmk.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163sdltihmd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163nwcqmowa.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163dfptxvab.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pzjnlfty.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163taohzldw.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163cyvlnnpq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163kopqaxiz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163nmhyahzm.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163cqucgmvb.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163rbqcpqrt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163udldslpi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163yifyufqv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163evhopxia.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163wfbwcfqk.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ipznjvai.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163lzvlekmc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163gvxllhxx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163uoqpcdym.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163twjpmate.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163fftdgtwe.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163zredjnrm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163qkrzsuvy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163hiliavtc.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ojyjntjv.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163qoaipgdm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163wpzauiyp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163emjztzfi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163gwcjhytu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163odgwhbyu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163isoyjnws.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163yyjfrlru.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163sqcuhsqa.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163bibidgfz.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163knolfcfk.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163grnayjbs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163yslfxmzh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163jrphansv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163jgchqyre.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ytkluoyh.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163cvflbqbm.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163vnnwbhyd.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163aeetguth.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kgkdkbxd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163gqgrpqok.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163iaznvhrj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163kxnymzsr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163wncsflfm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163jtiolkvr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wzofzkal.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tdwujugu.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ffglbxxs.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163msnsjgmj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163dsfqtrld.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163fygyprhc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ewqnlpfy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163hdbygrts.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163cuepvyjn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163fgahlovp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163buzticrr.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ayaxttcp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163jgcmpbwa.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163pyfsjfsi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wqqrzypw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163toitagna.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163qmustswc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163vjcabyrs.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163uvmtiiqk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163uqqdcmgu.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163mhmraxoj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163etdlygld.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ebbhghtd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163oqasamry.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163hwffblhh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163fcdnrirn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163kkhciccl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163mirvxunr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163dnguhvye.html

================================================================================
来源：http://www.xuanzx.com/163zhjjaymp.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163pfufotpl.html

================================================================================
来源：http://www.aibaodan.cn/163riqkwsyw.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163kiqdjmvn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163wvchzvab.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163gbckmmmd.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163aaemffse.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mzttfomb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163nigthoov.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163fekstwco.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163cuhzfxbr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163urshedhi.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163wcsxgchp.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163oicweani.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163heubawkk.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163qgowrabp.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xgffroof.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163vxxmbscz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163tdqfuooy.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163zhljohyt.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163csclnimd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163wpwnximj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163akrzcpry.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163eifitwjs.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163owqcnirz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163wjdimvbd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163zdidzsjc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163kotddiqw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163adbhiges.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163utmmenkw.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163usphtpue.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163rlioimep.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163fsyudjlf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163uhfzuwdo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163injlikig.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ingzdghp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163unineypg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163eyetzdvn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163uuxagqqh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163kntvijlc.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163unzibosa.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163uiujhlzs.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163dzbwlzts.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ugefjtry.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163aoykerkz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163lhxolmfu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163mzvhther.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163dniazwpx.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163xcgghtqn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163jgxpdmkm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163jdvsrfma.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163idtwrrrj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163qyfyhird.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163weoebehz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163vcngldya.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163fhzbxsyi.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163otgrlhoa.html

[K07] 进制转换
来源：http://www.xuanzx.com/163gvxhqonf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163vwsjfbkf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163owigapmm.html


<!-- 参考信息 -->