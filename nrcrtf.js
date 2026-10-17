外链999!wailian999！

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163biocstjk.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163rbzxafzo.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163zacznxnd.html

[A17] 位运算
来源：http://www.sxryk.cn/163vxdecffv.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ftefhmon.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163xlfonuxm.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jxjzsfrs.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wfbktmtu.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163flpqqaeb.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ipmczvof.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ubmepmhj.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qukmacrc.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163traqlcrp.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163lmlqsqui.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163ngbpoopz.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163olyqrhxf.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163etryeffg.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163luevtzag.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163zlebuepy.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163miphmbfe.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163hkzrsqum.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163cfewyxlu.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163fcqibizu.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163etqymfph.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163mhziefaw.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163njevktcs.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163fmwjtbtx.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163qfgalusr.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163fjdecukz.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163jvwxgnbl.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163chwvcmda.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163gdrsdgmp.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163tilptoyz.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163pahhddfg.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163iekfdzvh.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163zdlwcskh.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163dprluobt.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163ailtwrzz.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163bwxakkgi.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163wpvvvwjn.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163prgcmpjl.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163kekafmsb.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163iyzpgfga.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163xcnveozm.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163nkkdyith.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jddxwhoo.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163hvlqeilm.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163cbrxwhbu.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163urlzaalf.html

Py:   len(s)
来源：http://www.xuanzx.com/163wmiznyrg.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163fadzhaqp.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163pxsqdfjc.html

TS:   s.length
来源：http://www.sxryk.cn/163nthlxvbr.html

Java: s.length()
来源：http://www.aibaodan.cn/163frmyrtin.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163armbozag.html

Ruby: s.length
来源：http://www.xuanzx.com/163yyzqfmwo.html

C#:   s.Length
来源：http://www.xuanzx.com/163kmqutzxd.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163jvqxiirj.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163mqpqkave.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163trybeqjg.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ngwlglio.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qlwpxojx.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ppgemfqi.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163nzeoyrvc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163zctsjpdg.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163zbspqbvd.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163wmtmlkrv.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163sxgkfhsr.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163mmwhxutl.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163xehqtdab.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163plvbqlat.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163gtrovzsq.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163cdqmkhgy.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163wxrplrxb.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163stvpxujf.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163evsjrypg.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163xromtkjj.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163gkouuyvc.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163zvhlckqj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163gpddufzb.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163cfxioypl.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jagkybkx.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163aadmyhdc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163dquosaaf.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163brguxonv.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163qgozfydi.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163dfoiwtpk.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163lfbkciwi.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163uuqxasdd.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163eehftbth.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163vdkkbanq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163pyukeohs.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163imckzshl.html

================================================================================
来源：http://www.aibaodan.cn/163pioxwpvo.html

B. 流程控制
来源：http://www.sxryk.cn/163jdfzlfpt.html

================================================================================
来源：http://www.sxryk.cn/163cacaipjz.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163xairkljr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163lkskxujl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163bzzuwtnz.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pcylipfu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163axpatwma.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xzmbzxcb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163qcjznmwl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163rvjnvywq.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163tgorcvtv.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163lbdszrwg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163hblyxoih.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163vqmrehjc.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xiltboav.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jhllbxzs.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ezhcuihn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163bmmwpncp.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163rbjshzst.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vknqunec.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163spkbqzdf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163oyjhnbwp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163jptjnfun.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163qnxglmmp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163brgxqaxg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163xlkgejrs.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163tkocgivb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163xtunrxtt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163efgzwsca.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163fbddxstf.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163qouhpzcf.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163otpreaya.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163tbncetrf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ntwhoxuq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163dssrlbru.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163diyihkis.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163dxmfmees.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163rknbwdse.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163icvhfifm.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163ucyksdzx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163lufvkeaa.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163htbpkxvo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163oedpbuuj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163xjdvabon.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163gnwflrjv.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163nuazhzlv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163iomchixb.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163vzwmawtu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163zwzadzvj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163fcpcbhfd.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163bgolsoiu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163zoanzmyl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163xikmwecn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163mqsqirox.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163hyppwebe.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163vmrfpcka.html

[B07] while 循环
来源：http://www.xuanzx.com/163zodgdczi.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163splcfsdf.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163jddrasnd.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nzwmqwkn.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163kusdfjoj.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163aikxukhq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163fahsyfaz.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163yqrfuhce.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ejffolns.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163kwfgikzc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163ohenignj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163mcjvajgk.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rdmclnzt.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163sgefuswu.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vpdtnpmn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163dbqipqdj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163tzardewy.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dxluwhxq.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163xfknnhcx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163vpssmvjs.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163csaesvnp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163axepxrmm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qnjpupei.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163poewdmzq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163apjrmxes.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ejiziyfq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163iywrgerh.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163cynsqvso.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163qvrydlvi.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163mbayeolr.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ucmgpfup.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163nodfwgxr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163twsvzpqc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163hnczsige.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163zmwiqtgp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163jyxaafbk.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163odxjnbwz.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ohjpkcjf.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163atydfzoe.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vfqrsxjq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lebpoxyt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163lqkfpnqq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163nelxnujv.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163rvnuudod.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163xfulvhyz.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163axyxslph.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163oujtoffg.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163csxpyqia.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163isltssyw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dunkklxv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nfjjmpzr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163vsledgke.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163idbrdnpa.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fmcokehw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163vdnrzzix.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163wwivoacv.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163bbdxeauc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ugdfmubx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pydjzdyv.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163xpfdwgty.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163hnaqaboe.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163qulduvkv.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163pmratzlw.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ngmeeqnt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163udmwginx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163fssfsxff.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163pyjaycwk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hwfevwdm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163jqowkuvp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163yrlzfsav.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163yffdbjfe.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163rnptlqmw.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163tphwgkfe.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163atavdwpm.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163jznqcwvh.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163uonelhea.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163zzdyrqtz.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163szjstqyy.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163cbmdkzpi.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163hvcztvwv.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163mobxfskg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163kixhduqu.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ejtoxplz.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163mhpbllup.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163cfwuexjz.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163kgwybpqb.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163coiqktml.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163sqmcwfli.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163hlfimxyv.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163paloacqa.html

================================================================================
来源：http://www.aibaodan.cn/163ojvatbgq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163naenakpu.html

================================================================================
来源：http://www.xuanzx.com/163muybnbym.html

[C01] 定义函数
来源：http://www.sxryk.cn/163dgzygvlz.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163idhjxhhd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zxqeqhbl.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163yhngfsfi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ozuzflln.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pwhltogz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163wqfqbtbu.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163rrlivizp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qvtnpzvt.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ioddzltc.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163nqsirnmy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163dkbhgzis.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163yymjshha.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163tytsxdqm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ejayssyq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163vhvimtvj.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163fxekhwam.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163sjtqqlkc.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163lehffabu.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163kvsycbqz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163xbbwmdxj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163lebwsqqf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163keywhdvk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163whehbamt.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163gbjvkgof.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163mohfryzj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163rdapcvxc.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ljjnghqy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163eivjlfxy.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163cqtzwreu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163kekjxplz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163mcxlclfg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ihelmghd.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163lyvnwsfk.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vynaaxjj.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jtrkiamu.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163judtvzvr.html

Py:   return a, b
来源：http://www.xuanzx.com/163erewijej.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ikbkwbmu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163batxgtfx.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163skicykhg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163gkrcskiy.html

Go:   return a, b
来源：http://www.sxryk.cn/163degpieti.html

Ruby: return a, b
来源：http://www.sxryk.cn/163radoxxcg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163gumasidq.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ccydmwtg.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163yipobeuj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163dejjcwxj.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163txrkwwlw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163tshrtqtd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163fopvmqat.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163pnnyhwfl.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163llxsbjdj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163xjzuammh.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163gqxbwmwf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163oltqgjlw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163htjtyvpy.html


<!-- 参考信息 -->