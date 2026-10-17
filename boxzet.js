外链999!wailian999！

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mtxcijuo.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ujmfxuic.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163eesenglo.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rdihfyoa.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163omjgfszu.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163awyzkyib.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163qldmvgav.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163aqkypbor.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163kyjkrswj.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163hydqlgzs.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163pwthbqva.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163fzxisslu.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163brkultro.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163mvmjqkgt.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163hbwtnvvn.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163dzlecvjl.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163vqrtnbyt.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163zqcjbukt.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163hqxmldmr.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163winkzuxn.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163jajsdxfg.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163zwodhaam.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163wfytoxdz.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163bcjttkcu.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163vncxwlvw.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163kyadcnqy.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ivngpltg.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163ixtwtzcw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163xklwfazr.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163mifxtebk.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163kngehwlk.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163dzzibkbb.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163calsvjql.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ctmsvqzf.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163kqsnmjgo.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163nzwjpgvx.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nuvplkdc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jancogkc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wrjvxqbi.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163ebxqpddu.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163zukhbshn.html

Py:   len(s)
来源：http://www.aibaodan.cn/163jzvbuzui.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163bcddbicc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163jpuhdoni.html

TS:   s.length
来源：http://www.xuanzx.com/163hsekepds.html

Java: s.length()
来源：http://www.sxryk.cn/163vwheuvwr.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163dsrnblae.html

Ruby: s.length
来源：http://www.aibaodan.cn/163bcwfnwvv.html

C#:   s.Length
来源：http://www.sxryk.cn/163ipjfxlvm.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163hugkqxqb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163jpzalysf.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163tiqpykib.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163xcwwlzry.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163qwqxwmxp.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163qibumamp.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163qhwfvsro.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163ddcqynik.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163znmavivd.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163modruwzi.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163uqcbxmpz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163akirwcnt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163lxbwcaxl.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163kufuuhus.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163qzappwcs.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ermdjust.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163rzavtsxl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163fwmkxpsl.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163sxjlwqmg.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163kvppictb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163tvzxhffw.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163plydudgr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163khhliiij.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163dhpoutky.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163lnbbfcfj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163siqmeypk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163xhvoruxf.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163eafqhhdg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163vtbjnqsn.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163jxzhwizf.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163itfabicv.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163lsqgmvnj.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163hlmduhgq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163qblxpjqk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163fggbpizq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ufqscboa.html

================================================================================
来源：http://www.sxryk.cn/163xpsrcazf.html

B. 流程控制
来源：http://www.sxryk.cn/163plogivnu.html

================================================================================
来源：http://www.sxryk.cn/163cjieqngj.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163snnknmon.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ggokvzuv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163nbpokhio.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cfgxyfqa.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163guxuewwq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163fkcququu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163doyfdkfe.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163wgfaaurk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163uxjniysk.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163yvpvbfgc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163mttoyyfn.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ekrvfhsb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163uzchjjse.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163iqgmrpkt.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dkkulmjv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163emnjhnku.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163lbtmdwno.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163abaenyql.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163dwtykggs.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163qoajfoya.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163oxvzmzlo.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mcslovzb.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mzsedmkp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163apyrjege.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163fbpjmbal.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163idhplwwm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163aunwetuk.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163jtnjmlzu.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163pjoggxlo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163pzdmrawy.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163rqmbxhrt.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163lfpuaszt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ylddmdgr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163rhzgufxn.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163ifeozled.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163jqrguhjg.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163xkeqpzpc.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163sowytsbi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163bawbgtvy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163jtkrcavh.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163fcptiamt.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ydivsnih.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163esptgttm.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163jsmgibor.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163uatxhuwg.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163rpcfhomt.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163kvylcwgq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163mkbsgzft.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fpsxdsxt.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163egiqdrbc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163oxnkhurt.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163yyakhcjt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163vzmsbsoo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163zhzrvqhg.html

[B07] while 循环
来源：http://www.xuanzx.com/163maybrvsu.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163zkupooid.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163jfnezcjr.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qwflhodf.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wczyjhjd.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bpqtcqfk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163ihzhtiqs.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163aoimplkf.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163aapdbqro.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163cfuzbeyk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ytjlwwul.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163roznqrtt.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pfjnrllu.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nxwqnolz.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wtxkzojk.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163kbmiuqra.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163mqwmuqxr.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ucgygtxp.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163tthevfjx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163pamwvzve.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163vwhouyzk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ueuxxsfw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vduohryw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bkuweerq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163jpgofxfl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163dgomntqp.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uqhkcmvd.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163hbptypmf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163bvkuwvsf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163nyliyqiu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163hvrmwxvp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163abxiihfv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163woizodhp.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163jjzpclgo.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163bdhuejrl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163kphwauqa.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163xcduwovf.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163pzgreehw.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163iiyagiyu.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163cjxyikgy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ccxaspmb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163kepodocz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163walouowh.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163zagojcdn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163wdmqcesw.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163eqbwssdo.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163uegwxsvh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ubgmrzgw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tdyreqam.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uvzgbmij.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163iestfgmy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163nzintahf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ljtzabss.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163wzaeibxw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163lcwhulee.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163citbicjy.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163xidjsbxk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zyalkqkd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163bnpasnav.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163zoolgppb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163jufswmrt.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163hktufsjj.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163gsyjzmlb.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163kuejskba.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163yftrjlkb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163zodhvrnv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163tjhkphhv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163fakmjgzn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163sktifwsk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163mblfbwec.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163foefwqdx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163pshkpmvh.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163vpvjqyjp.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163nsoufvwv.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163gtxjeadq.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163szaenceo.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163wjahqsnv.html

Java: a && b || !c
来源：http://www.xuanzx.com/163oumbotpt.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163rcvaekkt.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163itlnysga.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163sbjohtzr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163xvqdekki.html

Py:   if not data: return
来源：http://www.sxryk.cn/163nlaqmbpu.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163fqxaqsgr.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163wfchtapa.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163gpfagxyv.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163bwkdzofy.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163libokiwo.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ngkheohr.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163gzpoimfc.html

================================================================================
来源：http://www.sxryk.cn/163giccwzfc.html

C. 函数与作用域
来源：http://www.xuanzx.com/163sexgdson.html

================================================================================
来源：http://www.aibaodan.cn/163fkmwdfvq.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163fuekoeon.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163xwhwccjv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163goduhorf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163tkqhivzp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163tdvazngv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rzxucpmq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163jxnnwdyp.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163brbtzpix.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jjgatfxi.html

[C02] 默认参数
来源：http://www.xuanzx.com/163qxbzdhkh.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163qekdnybo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163lfjsmvks.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ixipxwja.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163fkwqwfae.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163tjrmtelt.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163lnsvmvqy.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163bbaojnhl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163qmephhyv.html

[C03] 可变参数
来源：http://www.sxryk.cn/163pxwxyhws.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163kpslibce.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163dggbrrkp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vvxnepps.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vkmjpiiv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163muhemhfl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163apereocc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163tajwtnaa.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163szhqcggi.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163eozcwsgx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163mzepvrjq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163rdmmzmfh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ipzdrzxq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163izwtcwwo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163zgpeifbi.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163vtpaazcs.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wepapeof.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fbltibta.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163attodoui.html

Py:   return a, b
来源：http://www.sxryk.cn/163jztexiiv.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163vetwpiud.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163kxonywbu.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163szhwkjem.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163ahqztuqj.html

Go:   return a, b
来源：http://www.xuanzx.com/163pzrqlpkb.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ufindzwa.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163pikmtutq.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163xmqyplss.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163hxwrclfd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163hqonwgbs.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163gjriwiyl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163yicyssbu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163lasgjxwe.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163suuqgkcf.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163kihapmmn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163qkpncdru.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163telvjupq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163aopoptum.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163yxciarzh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163uuzxryly.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163woisqxwd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163echtybuq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163gwtctjpa.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163drgmkbnm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163iwbqivdt.html

[C08] 闭包
来源：http://www.xuanzx.com/163ooaorggn.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163cxatikmn.html


<!-- 参考信息 -->