外链999!wailian999！

[A14] 注释写法
来源：http://www.aibaodan.cn/163rravtwiy.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163cmlvbnmu.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ujulqlag.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ltygswng.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zsjkecgv.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163rqnrpzvn.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tnpjzwsm.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163bscgomrs.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163fdvnvbvl.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163ilgkthye.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163xnrhxpcb.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163cptpimhm.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163yspjumaz.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163cjsxkudt.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163gluwxycg.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163ykpmkocd.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163umhqnixw.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163bzermfde.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163kjuyzrhi.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163afojjumv.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163qyctdova.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163howuzmlt.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163xklrtuza.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163nmgaeeja.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163kcdvvbmj.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163wrxpavxn.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163xtaxiqud.html

[A17] 位运算
来源：http://www.sxryk.cn/163sqzgskxj.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fjajbjff.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163sgqtjsxr.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ukslsxyu.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bmjrojft.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xpxchsfl.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dspptegy.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cgtykxgk.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jrwtdszn.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163plhgehty.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163bnvktrji.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163qpwyfoqx.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163zihtopmf.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163gflwhbtp.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163tdmkjkgz.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163zruqsisy.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163qucxbzla.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163qsoegwle.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163dbngxezr.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163wkdytltp.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163mmmtamoz.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163tnnjefjc.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163turmxwuw.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163ttxzrbve.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163rfteqokn.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163sesunnla.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163vqewvcvn.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163jithjelc.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163ehiwsknh.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163wtvzxaby.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163wmfdqjpd.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163ukkzrvgw.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163fakwlewy.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163phahpvcm.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163nhouonsv.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163pmnseibi.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163yzevgvqw.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163cpbvkcdw.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163tddhuhrs.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163skwflfrd.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163vlbwmjox.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bdcotxpg.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xhdlwvra.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163strdrpet.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163qlbfxhts.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163bcbpmvyc.html

Py:   len(s)
来源：http://www.sxryk.cn/163hvkuvduv.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163jvwyuwbf.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163jmrrdiqs.html

TS:   s.length
来源：http://www.xuanzx.com/163yvzyqnzj.html

Java: s.length()
来源：http://www.xuanzx.com/163txnuojdg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163dkvxvfom.html

Ruby: s.length
来源：http://www.xuanzx.com/163nxnequho.html

C#:   s.Length
来源：http://www.aibaodan.cn/163hjofhenz.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163mgpufbqn.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163wvaookux.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163mfmpdfnj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ztzmlmlo.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163iojepecz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ekanroyi.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163tookvyzv.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163ihutxnat.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163twowkgdw.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163bsryssuu.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163ycxooqoe.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163venpnyme.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163fugapphc.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163xnqsrvmv.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163qdghskgk.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163nglpmhda.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163nlcgpqxp.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163fbrcqfgl.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163dukcchob.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163hnmzaznn.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163zptacrox.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163dsfnfgrs.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163nhqnqpnv.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163dgwyvrqu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ombonubj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163dcnojwvi.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163nhipmlvx.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163sfibbeha.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163bigfiggm.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163itwoofgv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163rqsfqffp.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163iwfocyvq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163zjqufqao.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163wwzgyidf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163hskpvogf.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163cdwxfict.html

================================================================================
来源：http://www.xuanzx.com/163xszyhszk.html

B. 流程控制
来源：http://www.aibaodan.cn/163genbwqxp.html

================================================================================
来源：http://www.sxryk.cn/163pfdaulwn.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163hgxdjhkc.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163hdmgscyl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163fsxhmesl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tlrnttdt.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163cibanadl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163cwafzshp.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163uwtqcypb.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163huqoqrsz.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dnoglhyi.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ucxgutqt.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163sfpckdsw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163idqpodrz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163acoubyxb.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163swruvzud.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163afbiurzk.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163xfljrxdu.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163nhuecvav.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tnmyewul.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163cayojxut.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163lefjhdiu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163usduvkbj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163wmsobqrt.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ypjuovyz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163zcrsmefl.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163ielcfwok.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163kwcddotb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163npymobfg.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163omzlhywd.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163cvpnuepm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163qndgqikz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163mtphlaem.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ampsmtep.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163kfftlwqs.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163rttyuobj.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163lybagumf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163bndbront.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163cqvshguv.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163xulcmwvr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163aaoflnmr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163khlbulsm.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rdtzvyfu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163sudsarmt.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163yjxyxiwd.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163jekhpagb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163vpsuinvp.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163gcbvvlna.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163hujkjmlh.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163vdloxgpo.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163gkbvsqsc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163olpzccin.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163fdtmgaiz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163fxntzbqa.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163odxbezrr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163krlkwqzo.html

[B07] while 循环
来源：http://www.aibaodan.cn/163jhqnswao.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163gvuppgfm.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163mqecsmyh.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yvryqtze.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kredcrlj.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pzzvraed.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163qiaqyqlc.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163cpzffjkq.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bdczcabn.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163thzdkmml.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163jfibhuai.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163uvvrtkzu.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pnpmtvwc.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nvypovqs.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fouioeuw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163oeniimcx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163hpcpofxe.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tpnmecam.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ibdraive.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163qphyqjkj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ocjiftuy.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hqohrscx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wploumgz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vhmtbbqt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163pwpmdqre.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163kkmgpkmp.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163exjzgtsa.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ywpfjqsa.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163qghglayq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163wulfsjjn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163isvcnptz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163fwifeaet.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163rexvzcbb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163iqtrymvy.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ostzdvwh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163zecuysnh.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163hupmbxly.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163rnszcjyd.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163lgcwjluv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163dczjkjba.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xonooast.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163rrpnadfi.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163jnbzxljr.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163pwmutuol.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163twzcmtop.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163cfdikgzd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163nzcsitqu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163qprpyiyd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tjlebbds.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vyzpegdt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tfcfzepo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163rvypoobm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163xeogrihp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163pnibmvhe.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163qudgiyyq.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163lvgwqefa.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163cpzbxpdf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163odkavkmf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163lbnsiuoj.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163apyderzh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163nscwftit.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163jzlhuhtb.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163remjrebw.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163xfkymxmc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163vmeblndh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163myxpswgl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163azvnybxc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163hkqioyvu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163humzexck.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163wjpkxnzg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163fiirttrc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163sokkeupo.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163chvrsztl.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163awjxwkgt.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163gnscwfcp.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163dbparftm.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163yluphfae.html

Java: a && b || !c
来源：http://www.sxryk.cn/163aalsofhx.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163asouxhyn.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163mbmebhmp.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163bxzzyhoc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163duoyudkl.html

Py:   if not data: return
来源：http://www.sxryk.cn/163pgvbpdpo.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163vtyalwbd.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163xcksxjsa.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163nsfjpjyk.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163thsqddzx.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163uxogqngt.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ixxmclmi.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163llfyuxue.html

================================================================================
来源：http://www.aibaodan.cn/163yepwwmjp.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163vkxekxxj.html

================================================================================
来源：http://www.aibaodan.cn/163xtdpeenr.html

[C01] 定义函数
来源：http://www.xuanzx.com/163pnnikctt.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163exvupzyk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rbhwkaiu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163hgbfnezo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163nzzozwpd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tmvcjqcr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163qfsfawor.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163zdfkqfdk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lyydzmpr.html

[C02] 默认参数
来源：http://www.xuanzx.com/163oxodbgwz.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163vxqoqwvt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ffdnddga.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163jpplkrqg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163diavsxkm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163oadlqyzv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163jmqppgqp.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163teuwjctw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163sawippng.html

[C03] 可变参数
来源：http://www.sxryk.cn/163gulgyhvn.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163eirnzwtv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vhcnqxga.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163gwszkpxn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163dqmnumeh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163xpqzzzpv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163gnpstvjv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163crnufyhu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163wudhplwi.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163lwwopili.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163pzjmmaaj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163rotahlwr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163psnjwhvw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163fokgdcjp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163idsneuxa.html


<!-- 参考信息 -->