外链999!wailian999！

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wirenmea.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163pawqhbgm.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163cyvdbwvo.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163onwtmnna.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163uahtdwfe.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163vzrqsrvi.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163lexaokpg.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163zotnhfha.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163ytnnibhe.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163wsybjdyz.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163mhhgjzzt.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163nmlecqss.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163drkrupdo.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163kzrdyhuh.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163lmfbmqcv.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163mwccesrr.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163lcoavzoy.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163cypgbznt.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163gowkvqzl.html

[A17] 位运算
来源：http://www.aibaodan.cn/163ughcikhi.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163awbazdrb.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163pybmsdeg.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qkarwimx.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163tuylyjkx.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rqwxitvc.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xwerohgd.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fdmeojsr.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163buckahcv.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163awkfthpi.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163pfvqdkld.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163efpaevyh.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ecrbjdwd.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163plseewfw.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163hvgzwmfh.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163ikpttqcd.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163sksucsbc.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163ivfkfbzf.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163oydonkcs.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163jxdnlyno.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163wmpeidmt.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163bdjnscse.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163jzqfcyoq.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163ibgdbokv.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163pgznytrj.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163ocdtdszr.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163bqwbrpnu.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163psotcbrp.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163witzgptg.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163kpqsicxz.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163ieqzyore.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163cxidbeua.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163artrxeij.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163naspdvsl.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163wcagvrhn.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163nivrlcuw.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163szsxmycw.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163ahqlwcea.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zsezwugw.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163rxfxfotg.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163szuepmls.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ruvzyxqc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xtrbazie.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163lfmctikz.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163iidvropd.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163pcqsonyj.html

Py:   len(s)
来源：http://www.aibaodan.cn/163wmjjgpey.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163rodmczys.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163zituunui.html

TS:   s.length
来源：http://www.sxryk.cn/163abgnegzq.html

Java: s.length()
来源：http://www.xuanzx.com/163azmldrwn.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163jnlskzre.html

Ruby: s.length
来源：http://www.sxryk.cn/163jeomzuxl.html

C#:   s.Length
来源：http://www.aibaodan.cn/163cxqjxqec.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163dedezjdk.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163bcqgsbmq.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163dneraqwx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163qfjwadbs.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163oplnkfuk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163calsooap.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163wlwxwgcb.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163kidntqom.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163vyuuluvd.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ttazyrzz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163utevkkrs.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163vlkkkhgn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163vpjdzwev.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163txsmiokz.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163kbagdpby.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163fshzerez.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163utqsvthv.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163lfkkmnve.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163tyvclpow.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163pyevvjkm.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163hnpzmfxa.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163boqcdkin.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163oghkjfgo.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ibstajwc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ikvkuntb.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163wjtlzqlt.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ngitwhrl.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163gwndymul.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ghjdvxgh.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163ekjkiryx.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163cmwmhdvh.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163unhghrbp.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163alltdeyb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163msexcrkr.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163sbdgwsmi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163znqcxhyz.html

================================================================================
来源：http://www.aibaodan.cn/163tlocutlw.html

B. 流程控制
来源：http://www.sxryk.cn/163pfhcmbva.html

================================================================================
来源：http://www.xuanzx.com/163xrvozshd.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163kbiratqp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163zdqiddit.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163poajyfhb.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cytzrzzk.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xhpkluba.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fgbdkety.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163yxswzwgk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163hjvsugtk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yteyfpvg.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163zadpdxsu.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163fmguaguy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163ffpqxsbf.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mhmoamao.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kodlchqm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163farbfvmx.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163dwrqhfjk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163uzfpkyvi.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163dhsmhyil.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163oaqxdhag.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163kpduxvfo.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163bkfhwbqb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163cibwcahs.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163bykwzmlh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163vabgmnrk.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163qszywrth.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163jvppohop.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163dorrfteu.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163odnrmzwq.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163xoyrrfpc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163nqfcvext.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163zzvwizae.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163rqzaeedp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163pvqsviyk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163vwrhvcmx.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ijopjmxs.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163ngkimggu.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163drmxgkuf.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163clxxplva.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163rutllbvb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163icbttlhy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163qxjunlbr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163amfcgojs.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ujjgtdnl.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163nwifqjjj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163mhhqimzx.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163uamtrejl.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163gtqvojfg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163qpilffir.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163rfwtypos.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jcugwpee.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163llwvxksh.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ndfruefe.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163hmnagkoh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163nhomrhom.html

[B07] while 循环
来源：http://www.aibaodan.cn/163inxtiixs.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ctrqdzzt.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163adzkgchl.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ddouvncs.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163oqyucsfj.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163gwdzypog.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163xqskrlma.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163tnzfcxvf.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163apabtjcw.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163qrepbvhf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163isnmdtyb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ejrtzdhe.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vajorito.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fjjafbyb.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163enjmqifd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ueevvtju.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163dnqfprxe.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hagyrxsw.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163btoidxsg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163juuqgokr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163nvsxgoex.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nyzmeiyt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163owyohhnf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ndstgdfm.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163dxczxnks.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163tnoreddp.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lfyvnjwa.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163rwwthfrn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163kmnsrxwf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163khxprvcj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163arkozpqk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163awbaeyim.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163tesiawic.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163espualbv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163opeywfex.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163aotozmkk.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163wxjzxtkd.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163gcoolspo.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163twtglyzw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163gvpputwa.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xswjzfvf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163hrtlyyor.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163bnofawxx.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ftmkxzns.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163puhvdvcy.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163xyzbvvhy.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163qlteoiyo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ukvnlcze.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qjjhpabg.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163oucuezsv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jfrrqcsn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163pktrtywi.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163mnyzutwd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163gqffjhfs.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163kqqdpvjy.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163bjdhbfeb.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163dldshqvr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163xrdqkxja.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163touofsui.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ndsnyqpk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163vycmjtaq.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163vruoukqx.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163wzexddct.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163inhneyfu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163zjhakjob.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163uinrgmmd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163navtnakh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ximdofkc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163gpfwmlyo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163xbxoqkoc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163qtyuzbuh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163zqxfqpdj.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ofjshqii.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163tpoajeor.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163legsilkk.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163nnuzpzfc.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163xulfjbrv.html

Java: a && b || !c
来源：http://www.sxryk.cn/163uijaivoy.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163vjjntmty.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163rwtmerni.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163fzockbjj.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163fyaambpk.html

Py:   if not data: return
来源：http://www.sxryk.cn/163udyazxci.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163bghontcv.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163nfdbjrah.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163iiqtmsfo.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ofysllob.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163aooraocr.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163fxtzrnmd.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163nvjozyon.html

================================================================================
来源：http://www.sxryk.cn/163fnzvjrip.html

C. 函数与作用域
来源：http://www.xuanzx.com/163kzytrcee.html

================================================================================
来源：http://www.xuanzx.com/163fmcbinra.html

[C01] 定义函数
来源：http://www.xuanzx.com/163zzrrjmxs.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163rnvstddl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ejmunhmq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163rxnrnxwh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163pdqnmrlq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ftzqntmt.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163jxejoiwq.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163syssouqu.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vkmzltap.html

[C02] 默认参数
来源：http://www.sxryk.cn/163kigblttj.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ggyyoaiw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163wlpdwfhe.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163dbuleqjv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163evibapye.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163zpxalkkx.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163folvnldg.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163zapzazuf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163chmovkrd.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ivgexctp.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163iwviucfq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163gqywwgxx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dhkiqymn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zthtboof.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163jwubxncr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163znguymhb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163jhgrfqmk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163eubzvpqb.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163plpqdutf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163prhojbfa.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163gznruwxi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163hvxfqfqu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163hanymhkq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163gxbbxreb.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163gxdxxhxm.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pnlcwvvf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163migizoik.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163igkftcfq.html

Py:   return a, b
来源：http://www.xuanzx.com/163mwzuiwoh.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163qzleroak.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163bsnvoela.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163gnmxhqyv.html


<!-- 参考信息 -->