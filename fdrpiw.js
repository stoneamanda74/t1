外链999!wailian999！

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163pthtihay.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163setgkkus.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163zxwouzsz.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ulzskxvn.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163tvbjgkpo.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163fazqqffa.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163gehzwrtk.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163fvaimnge.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163rlftafto.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163izyxkwjp.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163zkqrflkv.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163rejubryh.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163hnvprrmt.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163xgrnmdhk.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163itswlrpp.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163hpgfkmwr.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163uvdfkxuz.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zrazfunp.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163lxycqynx.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fvdzcvmm.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lbtrkkmv.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ecrlirst.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163uycdeefm.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163aenuolgg.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163rwdtfrag.html

Py:   len(s)
来源：http://www.sxryk.cn/163egijlkik.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163jxppxeuq.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163uqcfzqmj.html

TS:   s.length
来源：http://www.xuanzx.com/163sbnzqjgl.html

Java: s.length()
来源：http://www.aibaodan.cn/163itrlabkk.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163xraobqls.html

Ruby: s.length
来源：http://www.sxryk.cn/163jcduecqd.html

C#:   s.Length
来源：http://www.aibaodan.cn/163vjhhnrjf.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163hszrkrjr.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163subjfymk.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163krsxkqrq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163nsgnxpvl.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163djblfqbh.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163flkaihud.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163ojfdirsu.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163dtpodrey.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163aajrvjfl.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163xgkuaqli.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163hgbsxhpz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163poekzehf.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163uenlipzf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ekpivayh.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163ektgofcu.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163qakkkksw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163njumcqpf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163lgflmhnn.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163tpjknlic.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163ebqizsqg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163lhuijiwc.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163scalhmse.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163etmemxur.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163pvekydme.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163tbmyepla.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163peqdgvrw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163dllnwahg.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163rhaopnuj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163saumhvha.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163dwfcbrxw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163ateddoot.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ezgkzydk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163faduxgak.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163qawefrbz.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163bkwjwfiv.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163vyaoolom.html

================================================================================
来源：http://www.sxryk.cn/163mejvmnmn.html

B. 流程控制
来源：http://www.sxryk.cn/163uqtwvugs.html

================================================================================
来源：http://www.sxryk.cn/163vbaztecn.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163bflbkxlz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163vgnwtoql.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163tcdxsmhs.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ewqxerqh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kalniyoi.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zxkhmiik.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163yfxtqbah.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163vcconxvz.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rzqcubln.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163cpqgolzj.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163mzgposob.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ulrzlzpa.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163opnlortm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lqqzhsos.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rmzpwwae.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163bhqykihn.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163fzlqmcgg.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lbzasupb.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163gakzwwej.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163kzxjfqdu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163kbgleqkq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fiwjneam.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163pxmeqmyv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ihsalfbi.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163tfpibpag.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163fmihvavp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163lunivpqs.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163xpyakeod.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ssrydpvu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163qsgdkcep.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163kvysxcpl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163cnipkofe.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163heixtghi.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163uderapos.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163vbrwvvwd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163qfpwkyze.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163nojmbzni.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163ubznnmzg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163efgpnxch.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163myscnkle.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163akbiuuri.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ycrjixxr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163erdytufr.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163rmcwkcpx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163pniawqon.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163pngqplow.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163xlvhmwnj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163vukddjtq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wztllksh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163idkntldy.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163cedbnvcn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ltemlswr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163xtmbqtjz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163mpamppgm.html

[B07] while 循环
来源：http://www.aibaodan.cn/163wgbyixnm.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163lfliyuvn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163pvmuifpt.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fbuayqbn.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163chfygdfi.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dnwbbfqd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ehpjyrzc.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163kwinvoyw.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nliaafkd.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163sdetpqpy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163vzhagvex.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163cqmiutuw.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zjknielh.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bysrgvum.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vkgersja.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163sumubxci.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163jfhzsyhg.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ihaphquo.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163inahpvgy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163onysaajc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163exihrzwm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163iahbowjo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163onxiwloy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uiqyckkg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163gcmipokn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163tkhvxlvi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nszhuoez.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163lfrvqsym.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163xuqslykd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163lrkfapxj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163lsfpngrm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163rrboteqq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163fevkyzno.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163sgkcmroc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163cumuyxhp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163poqmwiyb.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163yhwzcgqi.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163zlmuqihb.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163eofwbomp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ggcwdvkk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163pwzktnda.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163vkjarxbj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163fdzfhkdr.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163kevbinpd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163pqmhqvbt.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163qsdjraxi.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ndsilblg.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163nahbesnz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yoksyscm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dskgaqwe.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xubgwqez.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163gcmdtjrd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163tbcpatpp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163atpjdaiu.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ckntowlm.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163idckwojo.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163qahngxom.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163yebfjabw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163gndijlvs.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163xgmxgoab.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163drsqxfmb.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163yljmxpct.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163gmyynzep.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163odvuowlq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163tusdqjys.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163qxxuimff.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xgyafvks.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tcczrmfa.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163chvruyuo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ulysqhgq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163qmoyxcvm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163qzasctjp.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163saqabgkj.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163hozysefg.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163hnkaxpqm.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163wkzhjhwu.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163jvrwqnrz.html

Java: a && b || !c
来源：http://www.xuanzx.com/163lqdnmzsz.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163luogwzrk.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ebycxckm.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163dnouhhar.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ohimipzm.html

Py:   if not data: return
来源：http://www.xuanzx.com/163vacpdpph.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163grzwwdxh.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ugzagibb.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163izvvkrto.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ocxglypx.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163uxmaoosb.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163msdpnoyc.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163gbjjgqox.html

================================================================================
来源：http://www.xuanzx.com/163bpjsetan.html

C. 函数与作用域
来源：http://www.sxryk.cn/163rnnjtfid.html

================================================================================
来源：http://www.xuanzx.com/163tahldobl.html

[C01] 定义函数
来源：http://www.sxryk.cn/163prmjozje.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163qfpzvdnk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jkflienx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163xbsurppe.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163oluywsop.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163iutqqsfl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163dfpgksdb.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163nvfscoaf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vrgipjwt.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163fewihvep.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163wulvakyu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163qrkjgtoj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163xppztjdg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163nqmwngxr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163mmqowbrl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163kkqkabfi.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163hmdiwrxt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163kipdkpxl.html

[C03] 可变参数
来源：http://www.xuanzx.com/163agjpwees.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163qzmrgutb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163vegjaugj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fhbvaoxg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ffeoawzp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163zmnnnvyq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163kwzeorjf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163cmtmyjhs.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163oozrgfso.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163cyyjhtey.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163evwlgmha.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163mncspnaq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163cxwttxqx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163peyviudr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ldcytdat.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163twvxlkyp.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163pgvxrdrx.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ffifdvsh.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163lsbetqqc.html

Py:   return a, b
来源：http://www.aibaodan.cn/163vhipuydl.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163pojkgmed.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163bwjjiiqi.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163xahtnoaj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163kmqhsjxq.html

Go:   return a, b
来源：http://www.xuanzx.com/163rambbkcp.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163iknlyqyh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163bgcqcmpm.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163xsgawjbd.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163dzecoxsj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163qryhgvpl.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ryrgfwey.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163qyyhvibz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163jeobgbft.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163dpdcfeua.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ioagpmhv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163zmevsths.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163hpwhsjiw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163nnswnyvd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163jkpkiyrr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163lnjxlplj.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163mvaxcnxo.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163cggpvpkq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163svqpitfw.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163vipzxntw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163pgbznifd.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ctzspdxw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163estaltrs.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163jkaupubs.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yebxmqjo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ajuwvubm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163gmdsortl.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163znxhcypx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163pugcfagp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gpdlvipl.html

[C09] 递归
来源：http://www.xuanzx.com/163vdxgexgp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163fijljxnp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163vfcqeclw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kjwffvap.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yvpgidzr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163tachbpod.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163uzeeswsg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163oakvlzfo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163mosbkxkl.html


<!-- 参考信息 -->