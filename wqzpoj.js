外链999!wailian999！

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163hdlcguwu.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163zklcemim.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163tanypfys.html

[A17] 位运算
来源：http://www.sxryk.cn/163tjbaihyz.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ggbyukdy.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163ooqfrvcm.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tyyoyvsx.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163cjjkvviz.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zdhgjbdp.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163yzriyelk.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163epjyqewy.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nikjjrup.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163iwowpvlf.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163tustpqbh.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163izfchrgf.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163fdwmzctt.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163oxelvzsa.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163xsewdfeu.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163wtjznepc.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163lwifrioa.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163fcbxbjar.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163aqmsbjpt.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163yszpvnmy.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163zyqdnoaq.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163rqpycmmz.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163mifkfofl.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163nhexzbty.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163vkjrqycu.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163gclvrnsb.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163ucizmrtp.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163ltlytykq.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163tuvdzdjx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163ymhnahia.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163iorrfyyj.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163otsolhvx.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163hkycibup.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163wtxxbigv.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163xqeueyxw.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163zfvdwkod.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163mbwenmqj.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163kirxvruv.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vaacssry.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163doztyecm.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163gurpmimf.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xfcebsut.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zyxtdvyj.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ufwwvttb.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163jwrjuahv.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163pxylnidk.html

Py:   len(s)
来源：http://www.xuanzx.com/163butthxmv.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163jjbfcvgp.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163khwewatp.html

TS:   s.length
来源：http://www.xuanzx.com/163nybqbdhi.html

Java: s.length()
来源：http://www.xuanzx.com/163hmypsgqf.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163vjrjwymw.html

Ruby: s.length
来源：http://www.xuanzx.com/163fhdnwanp.html

C#:   s.Length
来源：http://www.sxryk.cn/163jbeypdbj.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163zlsncxnk.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ywhceyhq.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163bypqamwo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163xtcxclhm.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163uczioqsh.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163hdendzle.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163rxyayote.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163kfbtspxu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163lokeewgz.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163qkqcvyfx.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163mignvzmh.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163sulkarop.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163acctzkmc.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ngogalgd.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163dikrkbcy.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ydpzsfxa.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163oujxsdny.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163qkeelkyi.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163hocfemue.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163jyhvquhm.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163rfgiwphc.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163wlfhidrf.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163vqulfxya.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163kfahirsd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163fythhmmi.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163zkoxdyad.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163zdorpqff.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163ahlkxlyl.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163npiwwlxe.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163dljokhaw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163lfngddrf.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163zyzgkhqj.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163oyoiwmbl.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163vpzfpper.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163szpljaen.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ebnppvne.html

================================================================================
来源：http://www.xuanzx.com/163fedpclck.html

B. 流程控制
来源：http://www.aibaodan.cn/163qbalovzv.html

================================================================================
来源：http://www.sxryk.cn/163idtwbgdx.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163caalrzox.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163ewxcbrut.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163mpmmfdub.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nikavtku.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dibqlrzk.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wshywowu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163xeqmflmj.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163tzwwdtib.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vatuuqas.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163ytdrxvvr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163rienocwg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163tzbscyih.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kxoyddjc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163icwszetn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kkaodhbv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163pgyerdjl.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163gpkbkbby.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wkrxmdpl.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163kqfmdubm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163sepgdhym.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163goeqczjy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163znhpsfir.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163egetotxw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163whukejkw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163cpnlcnba.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163jprzngwk.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163dqsdsshr.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163qbnnnnuj.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163qwtdvxjy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163zpxjrems.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163atbkdtcu.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163uonhrouz.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163sxfloosc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163iiauvjjp.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163twdtclzr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163vyfzaopq.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ydzzpnqc.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163nixzrzqu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163bchsaush.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163uyjmfsgp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163pkvpccah.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ogwvxzfb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163vrpiiyyb.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163tujnxvzp.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163aktrjfii.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163xxjmdghy.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163yhkvzewk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ymxpvnri.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163hmkbkzlm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nsivivpq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163rniyhvdu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163kiwghjoz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163hczprmid.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163lfovlrsv.html

[B07] while 循环
来源：http://www.aibaodan.cn/163uuvdapvu.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163qqlvnklo.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163zukqawtm.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163smgnyhbl.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163eiscpugr.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zjubnokf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ysifonpa.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163hdmknwmn.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dagrartl.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163mrkhcnvn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163mihhubaa.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163cvjrmhcm.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163eaznuhik.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pykyyhmc.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jbefezzv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ecexjklt.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163uwcfxfvg.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dtyhvusi.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ykmfjcpk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163bussfsuh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163zqcvpitl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163teipwrvj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163atwdpsua.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zyjnhppz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163xnpbhjio.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163bykuxjru.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kudxzafn.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163gfalgpse.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163kzunjglo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163gwppkrwz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163sbjqvgwr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163pcgjiorf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163rfrkhbkb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ulckjdzi.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163saqkhkpm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ejhzzird.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163klaujzyc.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163drtjnnrp.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ipdgglba.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163owoevqvn.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ghsgrwjb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163gotixibz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163vuzrwcnd.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163tzmvsmvf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163vhyygraf.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163vtpshcgp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163nwhaqfvu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163bksuvpxm.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gjmdkotm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tydmzzbs.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163isuekxri.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163wwshufez.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ajuniqyi.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163cslvdkdz.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163fuohpoid.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163spzhzajl.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163vqwyrklc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jgfxuhim.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163opdlwrjt.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163kbkieesc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163tqpjbvkv.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163jwblofyw.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163dkwtdqqo.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163pigukzsj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163lukqgspd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163phhrrfxi.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163lxpkisft.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163cstygxwr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163vdzyubfo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163hwzfkjga.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163fihkrpvb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163xuqwozxn.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163gnuwargo.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163rqwaptbq.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ebxfkcpt.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163umyttjak.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163wywmilnu.html

Java: a && b || !c
来源：http://www.sxryk.cn/163xovddple.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163kxmyndqt.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163usbahtas.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163vhpqqtpr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163cfphfrrj.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163tjhhpxqr.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163kykeszty.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163rbjnceon.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163nvihuufy.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163lhmtntte.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163edcdnwsb.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163sieatyni.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ighzvdca.html

================================================================================
来源：http://www.sxryk.cn/163pfpqptqx.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163mqopttke.html

================================================================================
来源：http://www.sxryk.cn/163iadnmaov.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163fmrbhopm.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163agdonnxh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163iieeroxq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163mjsurtln.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wgredcgi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bzlxnhhx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163lssflras.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163bowmqrql.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hjrqebjf.html

[C02] 默认参数
来源：http://www.xuanzx.com/163dxwejzhy.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163finnchdo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163vpkjdvtj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163uloipvfe.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163thkdytoo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163grqhocgl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163vjcwjujn.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163vzzvwkgj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163fjsprhug.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163hbxreckd.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ayzucdcb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163xvmibkks.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163sufpnzud.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ntiqnwyy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163lujtkwas.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163aemqvaqt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163qybolxmb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163gdsitxob.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ksotspks.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163amuoucgz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163wkflretf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163odphfhyg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163oifgnlnp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163oqlwrsmc.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163bybvnovw.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dfaqzkpo.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zdhdphlv.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163ckpqmymn.html

Py:   return a, b
来源：http://www.xuanzx.com/163salbotlu.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ohggkwcg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163pptggvlf.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163uvfkwozk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163umwmnjxj.html

Go:   return a, b
来源：http://www.aibaodan.cn/163alnhbmzi.html

Ruby: return a, b
来源：http://www.sxryk.cn/163oxgibvwo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ueeozcza.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163mnxcwnje.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163qiealfjz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163lbuqzgup.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163dagkgpww.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163kgcwtuer.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ypvwrlmb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163meaaqxic.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163omvgdycr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163panyhhni.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163sihovvfl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ouhqwdxw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ngztrztm.html


<!-- 参考信息 -->