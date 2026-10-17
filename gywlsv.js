外链999!wailian999！

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163llwquywj.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163tzkvfayw.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163caugyszs.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163ywkqgapg.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163ovynokts.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163qyjaqelw.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163nonriala.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163cdqnrkhc.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163yykfgons.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163iyrsympj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163lobavwck.html

[A17] 位运算
来源：http://www.xuanzx.com/163yustvwtn.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jgdeuryt.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163unswgxqr.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vwtkqvgm.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163sgcxefez.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ckwpkkrv.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ciwsapfm.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hfohmjjf.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163aobpqoyi.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163hrdbdvii.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163wlclbnam.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163soxwhivc.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163tonkafwi.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163vcqhfjbm.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163lewllhgv.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163rgbjaifz.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163jgvieehn.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163kermwwen.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163ogadlytx.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163xbywmbjt.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163rgpppcbg.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163txpusrye.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163zhfygixn.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163olezappz.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163wiwgptbr.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163nrnhxlfh.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163yqetqfmz.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163qxhumkqf.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163qparbjyl.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163sjgcqbso.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163yvljmgre.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163oujyhxbb.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163knhrvinv.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163stfivebp.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163cyjxdkuu.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163nuhefhnx.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163zztxhtji.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163wsbwzvxx.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fsyfuwlo.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163doehocua.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163iyqzchkz.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163nlwrqmru.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kntlawgh.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fnnuyrzm.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ygsgjyha.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163ohsrlzjr.html

Py:   len(s)
来源：http://www.xuanzx.com/163paftyeie.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163raqiosrz.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163iywykjzx.html

TS:   s.length
来源：http://www.aibaodan.cn/163skkaxsbr.html

Java: s.length()
来源：http://www.xuanzx.com/163epcdweiu.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163jdckroba.html

Ruby: s.length
来源：http://www.xuanzx.com/163uusuyshm.html

C#:   s.Length
来源：http://www.xuanzx.com/163mzzojupv.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163drdvfhqk.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163lubnddsj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163seegsbwc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163yimlzwgl.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163drtkimvv.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dzoxrxlf.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163cglhyjod.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163ibmzfasl.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163nlhlesrv.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163ggdimsbv.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163rvnukxnz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163bgpwmrwc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163plezbhgi.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163vhuftkdd.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163dufpkrma.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163qtiqotgi.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163rgrwyipl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ylvbgytv.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163ylimcamb.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163fbhqfsfb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163oqeudkls.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163cskptffm.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163genrweca.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163padeormg.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163yovhvaon.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163gmyonble.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163umfqtdpf.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163rogvuhrx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163vdgazobe.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163drwddsdp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163hpohalfm.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163viodtjjt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ylvmlbmr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163iqgnzdep.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163jahorcov.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ccblcfyu.html

================================================================================
来源：http://www.xuanzx.com/163waugytan.html

B. 流程控制
来源：http://www.sxryk.cn/163nmvzihmd.html

================================================================================
来源：http://www.xuanzx.com/163dhoxrhpl.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163glzhjcts.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163jswtfgir.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163flzodjbi.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yzqfgbzl.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mabxhbju.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kjzknsdz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163rzbhpmiy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163thhnxsyf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163bedtejba.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ujahkwsl.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163qzibmcxf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163cttqydjj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ikaoivnb.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mldmkkne.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tfhjhyaf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163qnytlqqs.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163imtjnjfh.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cjdfptdf.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163dliyajzi.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163nmrsvhbf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163frlapzwz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163sptzykif.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163rrgeawkr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163rcyiyqys.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163fmlobvwc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163zuhrqjye.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163tzegcsvn.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163tsfkwlcb.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163wqpwjygw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ulgoepra.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163vjtflkqy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163exgwujri.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163hbhewxhs.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163mynisprp.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163bjxqvjzb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163phbwgtaq.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163fqxqnynv.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163drurlstq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163naogqjno.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nzbhfzts.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163uclnwuym.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163wdxodgfs.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163wygthjee.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163utpwcplf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163qymwhzeq.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163vgiupbdn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ikcjfmse.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ybcaduxm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fcdjlqvd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ncdwqiua.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163jvatrwhe.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163mloxdbfs.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163dmdqiodl.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163uopomyhl.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ctputuuv.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163xannoqfc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163pzrlsfpv.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163oroiykff.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yhzuxdkz.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163stclbldu.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163lhabdoww.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163wpzdiyxw.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kmjytchv.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163tpzlkbjw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163vazaahgn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163hhiuwycr.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lalexxut.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jbpyuoxt.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jaicxxly.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163wegmdjvv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163pdnpdzch.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cnfmtaxp.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163zpatyerk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163qyqofnku.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163etgxghrj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zqzfutqs.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rlzucbki.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xkpbfine.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163canimxnj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163pvcbcipx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xolxdtjx.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163drpbkziv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163cfkkcuei.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163nkpgnldj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163xqdwrqpu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163tisfzfoj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163kjaujdqj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163bprqzubg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163izmyrwat.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163fisythns.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163kyhlrclj.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163btgzhzvy.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163tdfrheif.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wwnxfpul.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qmjjodrx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163tzjgofsh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163dapjvrvp.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163oohdjosr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163eszkftfm.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ujzjprmp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163kxudcpcp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163jpneudqr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tinmxlrl.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vtxamhti.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163misjrrnk.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163cetpwxei.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163kwkehcba.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163dnjpqgrl.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ahzrmtrv.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163kvatqcii.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ewnuekxi.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zughbjbx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zzezyvid.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163yaqswcob.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163udlfvsmc.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163guhiqytj.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163qhzwpgmb.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163iwzpyvnj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163exsfybpd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163sajqwojw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163densiokd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rrrwrzeu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163emjfltgi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163vqxpnemm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163czyntebp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163sxbuwscu.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163pbietgtk.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163zpudalzn.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163yqvorydc.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163fruutols.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163vnemyfrr.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163lgtrkvam.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163emmdjfae.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163cygqrumc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163rmlnhpwf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163qmhkzdvw.html

Py:   if not data: return
来源：http://www.xuanzx.com/163mfmwdoqa.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163gickpagt.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ubumkxcb.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163txissjoh.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163gtdattoj.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163herevhul.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163hkkobeec.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163srjvbepw.html

================================================================================
来源：http://www.sxryk.cn/163gwzwlibk.html

C. 函数与作用域
来源：http://www.sxryk.cn/163cuzubdqm.html

================================================================================
来源：http://www.sxryk.cn/163ewbhxjgb.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163daiajwaf.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163rjuxehrb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bxqselid.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163jhieqvpi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gcxpieyi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163aobcylbt.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163oqesqhwy.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163hiszqajt.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163pmhpzsru.html

[C02] 默认参数
来源：http://www.xuanzx.com/163irvgcsyp.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163jpcjzfcz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ccezpmhf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163hgquclpi.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163radmwvxb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163vxizsdmn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163dpjcirik.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163wpqgkhdb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ckoojjwf.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163hebbhzsu.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163zjdtlsln.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163vgraboyj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163srlkkgei.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163bdfwzpck.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163uvzialow.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163krhuijhb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163xxwhzjxp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163htxtafbh.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163uwyzyras.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163chjykznh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163prleahok.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163cgxhjiuy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163jypvslkd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163fzozxzrf.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163kxmzrtrl.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qspmktrm.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163dozoqzdu.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163cnuvpzyz.html

Py:   return a, b
来源：http://www.sxryk.cn/163witarclf.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163sqoowjyh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163lipvtbpv.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163fntjzrfu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163cuysqpqi.html

Go:   return a, b
来源：http://www.xuanzx.com/163wablidpd.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ngggqhot.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163wgvbjkfn.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163gadcmsne.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163iticlzhf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163mvxhlbuy.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163tqgfggzd.html


<!-- 参考信息 -->