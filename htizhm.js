外链999!wailian999！

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163litapose.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163zzvejuad.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163pefqzmjo.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163frowdlbz.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163jjkptrty.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163joladdto.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163ptnckuhx.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163dwzphfmx.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163qxgsoubh.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163hqjklfgv.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163unnpngvs.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163lnjqeiel.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163izdhazde.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163odsuqyti.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163hukrbcaq.html

[A17] 位运算
来源：http://www.sxryk.cn/163entffgjv.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dlfjxtee.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163czdsqpqi.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163llgcjpyz.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163dennhojk.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cgqbvfhc.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163coqhuwcm.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xrnrqzou.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vppwmlvs.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163lmtqsepe.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163pvnqgxgg.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163ohotmkqd.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163axsahkqd.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163dnrjrxpb.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163ccxgpifb.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163wufqihxn.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163gzrcqbvn.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163nrpqejqy.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163xnebpmdl.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163eninnwsg.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163cfadyewf.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163cqtauoln.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163mldvwfmf.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163hsqrjept.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163ynxxdtpf.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163nstoqlgv.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ipljsynd.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163trehblah.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163grsiblwx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163cfhguiwk.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163hhstbsds.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163vduwwiaf.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163xxasuoxd.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163gmyltfxh.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163imotncff.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163auigwgsb.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163jbjuibfe.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163qpevlavu.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jnenyzhm.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163kdgvdaxj.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163mdbxssqy.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163odaufrfi.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163mxrgpjbd.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163agosggrc.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163kuuqswgg.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163vwmsawje.html

Py:   len(s)
来源：http://www.sxryk.cn/163woizwkbx.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163stjuglnf.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163kodnnvto.html

TS:   s.length
来源：http://www.aibaodan.cn/163gihhglha.html

Java: s.length()
来源：http://www.aibaodan.cn/163naurdpqg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163imdspxtt.html

Ruby: s.length
来源：http://www.aibaodan.cn/163bqjjtmmn.html

C#:   s.Length
来源：http://www.xuanzx.com/163xbjkhovw.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163xgtonhxb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163xwumbkws.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163qqlbzaqb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163zecvlyif.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ucdbfagc.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163nmupdrtd.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163twrqlfjp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163erxhcozk.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163weedkjpn.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163gthcbqhg.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163lsjrifsd.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163sbzyzmhf.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163knbvwuxy.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163jofhxxod.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163rwhtvbnt.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163bpilcvzh.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163zmcolhkk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163bqzpzppu.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163gkcvjzze.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163vsohmvlz.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163zkolywgi.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163pxkonwwh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163vtgtrlkh.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163xtkcnuee.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163qlzyczcq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163nflgacpc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163stytnlei.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163fnkgocqd.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163eirfdgyv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163bdgtflzj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163wgsyakfv.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163kiibyefi.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163zmlwlvyp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163wcmndlec.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163rmdjcbjk.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163xovkefdj.html

================================================================================
来源：http://www.sxryk.cn/163yddtzkrk.html

B. 流程控制
来源：http://www.xuanzx.com/163oqimtzxt.html

================================================================================
来源：http://www.aibaodan.cn/163wkeadedv.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163sczwucbn.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163oxyvqzyn.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163dceykhgo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lwyllufk.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mdtfezxu.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ldozhema.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163lthumbdd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ggvqamlw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163oirqrorj.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163gqumhhus.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ooxjawed.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163voqcqank.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hskkufjf.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163nlngnroa.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vlvitbtm.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163dpoogusm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163oasgbojb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163waemopxg.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163petazraw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163qjmtkejf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163fjxceogz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163nezjerac.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163pnyxwqsh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163hxfiyksl.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163vzcpqanl.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163kkwyeptk.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163kbodspwa.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163zzakgapu.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163fjzvsahi.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163wexpjpep.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163tphuhaeh.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163iolqjgkm.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163oczetyhf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163vfcdgwsc.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163noijgfdx.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163ewjpryek.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163stmlmklc.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163xhzmzwzl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163tkkjgfks.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163vkphrdpr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163zoxhsysz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163fisdoudk.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163iviwuqjh.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163azxeuarc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163zxghyvan.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163meaqadwk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163xffawxpz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163qgasspul.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163skaregvb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163bisrzwat.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163gwzohmvc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163sgncgkqr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163qeaefuvv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163rfeswvio.html

[B07] while 循环
来源：http://www.aibaodan.cn/163enpurdlr.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163vwxcjuwb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163kwqehtcr.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163whsnonvk.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ijakinxy.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pssgjlvo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163shestnss.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163hvfhriaz.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163blcnnmmk.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163qldzmdno.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ewmkhbud.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163divqcufl.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ctgofbps.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pgniweba.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163aboiozfu.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163hguunsor.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163lhodfgkl.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fxapzodl.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163dgvfrjhl.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163zpkdwfkn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163rpuzcgdq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163eigmmeqy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kywcxjor.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cktmnsyv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163rgzkanlr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163jhmqmhkf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wgjtnbym.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163fsoqldmp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163fslfvepv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163subebhdz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163nkuruvty.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163akkbeirx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163hpnesouo.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163ypgwqshh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163iaobcrxh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163axlnrfpd.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163zzvgjjwy.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163agjjcjfq.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ogfehedk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bnqhkbsu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163scotbzve.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163txwlbdxu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163yzksakqi.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163baizgphf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163gcfxvdmg.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163oluqipba.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163pnevbbuz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163kkovqsno.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163apzlgmat.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163veppxnhc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fkrhutjv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163kflzgkdg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163jxexadjw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163emxeizeg.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163mcanbuom.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163iujyfxdv.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163vnppkieh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163lcgrlhxl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163rkzdvedk.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163qwyngcer.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163nzurggae.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163nptfydqx.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163axxxcpwm.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163xprnxgyp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163tevmaiji.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ppkyeqzf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163utrujleh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tnoychff.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163opazvmmq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163uztgbggh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163oftkamgq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163mqzmuwye.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163gfmbccld.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163kwlyfidr.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ucfnmrhd.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163zbxqzsjx.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163zkxivxvl.html

Java: a && b || !c
来源：http://www.xuanzx.com/163tsupvbgt.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163gmhufeza.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163aigvnvjf.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163zneutemv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163soerfarb.html

Py:   if not data: return
来源：http://www.xuanzx.com/163byjuqqfq.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163fvhfzews.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163rnjnmmik.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163yobpymgh.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163zddwkxcg.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163fgrywsvq.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163harjjhho.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ipisbjnf.html

================================================================================
来源：http://www.sxryk.cn/163pyierrps.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163gsrkxnsd.html

================================================================================
来源：http://www.sxryk.cn/163dnshqklo.html

[C01] 定义函数
来源：http://www.xuanzx.com/163gvzkxkpe.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163fbnuoxwa.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jamssymc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163wdmfztwj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mffkdpww.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qqttbfwq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163vilrkwdy.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163lqovkibz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qwrrodql.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163akudjszz.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163agciuntp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163mbfyroia.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163fnafhmgy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163uivfqrjd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163xdchfzmw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163gcgiyxhl.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163bpxspqlx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163owsqkaov.html

[C03] 可变参数
来源：http://www.sxryk.cn/163csakinfp.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163zkbeqymi.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163xpfnkzqn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163daphecgj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tgizvwdu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163pckgfvzx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163bzoqjbsf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163anvoisvt.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ymcqdaba.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163vtwhalob.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ukfccvrl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163elqgzvyk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163nbqfhlsr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163fgpvylfj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163myfkgfve.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163tanskpoo.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tjrrqxlz.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vbbyzxfj.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163lcobbvqu.html

Py:   return a, b
来源：http://www.xuanzx.com/163piyfdyvz.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163faglxciz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163nfzkupnc.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163mxagcpqn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163uxdgjmer.html

Go:   return a, b
来源：http://www.xuanzx.com/163oscfbbmi.html

Ruby: return a, b
来源：http://www.xuanzx.com/163sxgcrldw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163lrkrkazh.html


<!-- 参考信息 -->