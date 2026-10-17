外链999!wailian999！

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ussdspzf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163uvwzytzx.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163tuaqwivo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163cesnbyxe.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163nnfozaua.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163bvoulfcr.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163uxbtxnkd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163lidblaaw.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163blumplgx.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xvlrpmkj.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163czdytikh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163yaeykarh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163mniacfod.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163jothbajv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163jwwxumst.html

================================================================================
来源：http://www.sxryk.cn/163reovesgb.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163jzbibpwg.html

================================================================================
来源：http://www.xuanzx.com/163thjkwqit.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163dnnsoffb.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163wqdqiyfh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163dqipemzk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163brxndpfp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163sgojsqdg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163yhkkbkzg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ogrftods.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163lseyozxv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163zjrpoccf.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ubfceswy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163tcktwyfa.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cmegyowf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ofusyjsg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qbvpuwdc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jzuitdwp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ulwtksnb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163egfgladc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163xtglgnwj.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163xvpvccqc.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ilrepxmn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163vwvyceuk.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lbhrojme.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163zaabztik.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163jwhihdur.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163qtozyiiw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163hikojevu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rzuxizyx.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ubcmcisp.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163wmymdpwg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163kdfgaxlq.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163tvrddywd.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163euyqhwzo.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163vixvzjdv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163uohokdtk.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ctbmodhc.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163jqiqehup.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163bublkupt.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163fnignmvr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163qedzkcvr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163tjuamkpg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163nbvagojk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163zeykmonl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163oblwvqkt.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163xljzviuh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163jrbqsqei.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163sczppqvn.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163yifedftb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163girsszir.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qsjmccji.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ctldptnz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163yxsrzlyu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ilzbuaom.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163zllipsbr.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163hsfxfikm.html

[H07] 断言
来源：http://www.xuanzx.com/163beoqojmh.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163namcybow.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163skyaorkq.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lrbvszev.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163peqztewy.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163whrtrslr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163thatrqxp.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163awppsaxq.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163cdsxkhcj.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163bqswoxci.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163nzkyadnj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163edcqrrtj.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163zkgafije.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163jcsusbpa.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163bmrptann.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ycgkkvoh.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163vuabdvug.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163azheisov.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ioqrauok.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163bueptkfm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163rnzgpauw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163gznluluf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163xvajbaic.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163tucadkhq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163vpldipfv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163labvxnlh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163itefgppl.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163rtxwyzzm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163cchvobea.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163pmrpgwct.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163epwnsglo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163trnugpao.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163menihchu.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163fultnsss.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163xhfjerun.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163yzdalddc.html

================================================================================
来源：http://www.xuanzx.com/163scqontzw.html

I. 正则表达式
来源：http://www.xuanzx.com/163zbeuvegj.html

================================================================================
来源：http://www.sxryk.cn/163ixokmbts.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163rpbbohhp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163tnozycos.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163tzbwcpma.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hxpeombe.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qmdoqoah.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163oelkzfgf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ylnmcvgg.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163hbpryrec.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163rtydsskd.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163keevklil.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163tvnlaesx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163kdijprxj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163dgalfzvf.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163kupinqbk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163segaefud.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163pgurttcz.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163uleoywyg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ssqtlakv.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163qztrcjqu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163jvujwzoz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163nhaxiudf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163rdgwpcyy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163peholmrq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163tvpzawsd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163mcaqefhn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163inxwntld.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163xgpghukd.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163yhnufawm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ngcmxyuf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xgifmkgp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fryztsvc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163uefioybf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wtgmvosa.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163pwcsbzqo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163gqzsayfo.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ogjgjfnz.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163wahixbxu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ylhpcdjx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163scfznmmx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xskiyobf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qqnvqgch.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163csqbiyiw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163bejgfbcw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163dudwkatv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163pwsdvnbo.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163zmotzmec.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163dduwjnlp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163nfmcostf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163dfjwfplj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163cnxuawsu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163nsgsilxi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163afthtbfv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163vqdtikwl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qoqktpwy.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163oasxojif.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ltdshrpn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163xjxvegjh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ageoxjbb.html

TS:   /error/gim
来源：http://www.xuanzx.com/163qnratyey.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ykoqyrnf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163meqtruqu.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163hlzypokh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163xwiaxiie.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163tnaunnwf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163iqciabjs.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ptcdozbr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163gpavtcey.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vbafldpe.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163mfrkuduc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163kvrgqzsv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163nmdsiwqo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163spaylljc.html

================================================================================
来源：http://www.aibaodan.cn/163hahcfuhk.html

J. 日期与时间
来源：http://www.sxryk.cn/163kokdqsyi.html

================================================================================
来源：http://www.aibaodan.cn/163zhrzvsjf.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163hgoyibib.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163vouqdroz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163pqdsnrlk.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163utiuyudt.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163delutoyr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163qnaxkqdd.html

Go:   time.Now()
来源：http://www.sxryk.cn/163jznvodgp.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163tkjkzoob.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163oeyvivfk.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163vvkhfxjm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163jgsyetus.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163bkncgyjk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163syziwhoe.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163didclvnh.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163imfsuivr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ppuqlpzv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163stnrfzwc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163brtoffnq.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163yprmntpv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163iqjklanp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163vwwdykpl.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163djuqqhlu.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163cbsmcxcx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rjgaolnm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163qmoehovg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163lokbeoic.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163okvnenwv.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163btytpres.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163hijkpnyq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163owcceigd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163iejmqhlj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163vfkpfvro.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163zemdtejc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163voxsvbyd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163pntednqy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163bbbjpnku.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163cpafqzdz.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163gzmiqnvf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163alvlspgz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ltgldmxp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ylyvdcpb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163swmlrhsj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163szybdsds.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163pgpmjhdo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163gskbhyyf.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163mntxxwou.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163cesycslp.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163bwzlbbms.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163puoistkb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163kmnmhqto.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163qyayurir.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163lyasrmjz.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ylgyzrnq.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163howkhyju.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163pmjscyah.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xndmqjwd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163cepiqpqt.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163dqxmtcsv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163kganwcdl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163yvwqruzi.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163olaotkwq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ufwmajqw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zbfrmlfr.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163uwclrfmz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163wazjbdvw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163xnsiwgao.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ymijqrrc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163zvqdaueb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163brbgzyfr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163yfhofkym.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163xhvlchtd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ailyralb.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163zufftrha.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163qebcniiu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163eacqnqiw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163oulixfpv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163sokuwweu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163xiysbcqs.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163zuiapmpr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163dfrwxrwc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163kietjgef.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163xeovkwms.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163xpplkiiy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ctumyjzw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163kejabmnv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163gwxloopw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163mgpwzpbn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163lplrkcau.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163mzutlxev.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163adfkpugk.html

================================================================================
来源：http://www.xuanzx.com/163urecjfow.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163lgdladqr.html

================================================================================
来源：http://www.sxryk.cn/163grusihiv.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163gqcqrhai.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ckprtvje.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163cmaqrbwd.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ekyawyiy.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163lohanske.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163fbrztpzs.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163hfaecahy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163xqvgykwm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ustpihep.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163vamvikmd.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163mhaewlfd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163rwsgmejv.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163eccdcbys.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163pykdzqrp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163oqgbegkf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163pbcaemtq.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163zjoymfmb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163rvtuvkiy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163xxfvghdw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163qavzayvt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163bkhsfgoc.html


<!-- 参考信息 -->